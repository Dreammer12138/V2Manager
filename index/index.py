from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from index.models import V2rayConfig, V2rayShadowsocks
import os
import json
import psutil
import re
import uuid

def index(request):
    js = ['index.js']
    content = {}
    content['title'] = "Home"
    content['scripts'] = js
    content['Data'] = {}
    content['Status'] = {}
    content['bars'] = [
        {'topage': 'config'},
        {'topage': 'status'}
    ]

    # V2rayConfig
    v2rayconf = V2rayConfig.objects.all()
    if len(v2rayconf) != 0:
        content['v2raypath'] = v2rayconf[0].Path
        content['v2raylogpath'] = v2rayconf[0].Log
        content['loglevel'] = v2rayconf[0].Level
        content['v2rayport'] = v2rayconf[0].Port
        content['protocol'] = v2rayconf[0].Protocol
        content['UUID'] = v2rayconf[0].UUID
        content['Data']['protocol'] = v2rayconf[0].DataProtocol

        # V2rayLog
        logpath = v2rayconf[0].Log
        content['Status']['Log'] = ""
        if logpath != "":
            try:
                os.listdir(logpath)
            except:
                pass
            else:
                if 'access.log' in os.listdir(logpath) and (not os.path.isdir('{}/access.log'.format(logpath))):
                    log = os.popen('sudo tail -n 50 {}/access.log'.format(logpath)).readlines()
                    content['Status']['Log'] = ""
                    for l in log:
                        content['Status']['Log'] += l.replace('\n', '<br />')
    
    shadowsocksconf = V2rayShadowsocks.objects.all()
    if len(shadowsocksconf) != 0:
        content['Data']['ShadowsocksID'] = shadowsocksconf[0].ID
        content['Data']['ShadowsocksPwd'] = shadowsocksconf[0].Password

    # V2rayHas
    v2rayHas = True
    msg = ""
    try:
        os.listdir(v2rayconf[0].Path)
    except:
        v2rayHas = False
        msg = "该路径不存在"
    else:
        if not 'v2ray' in os.listdir(v2rayconf[0].Path):
            v2rayHas = False
            msg = "该路径下没有V2ray执行程序"
        elif os.path.isdir('{}/v2ray'.format(v2rayconf[0].Path)):
            v2rayHas = False
            msg = "该路径下的V2ray为文件夹，不符合要求"
    content['V2ray'] = {}
    content['V2ray']['Has'] = v2rayHas
    content['V2ray']['msg'] = msg

    # V2rayStatus
    
    v2raypid = None
    for pid in psutil.pids():
        if psutil.Process(pid).name() == 'v2ray':
            v2raypid = pid
            break

    if v2raypid == None:
        content['Status']['Active'] = 'Stop'
    else:
        content['Status']['Active'] = 'Running'

    return render(request, 'config.html', content)

def updateUUID(request):
    res = {}
    res['code'] = 1
    res['data'] = {}
    res['data']['uuid'] = str(uuid.uuid1())
    res = JsonResponse(res)
    return res

def updateConfig(request):
    res = {}
    res['code'] = 1
    res['data'] = {}
    
    if request.GET['UUID'] == '':
        res['code'] = 0
        res['data']['msg'] = "Error"
        return res
    
    v2rayconf = V2rayConfig.objects.all()
    if len(v2rayconf) == 0:
        V2rayConfig(
            UUID = request.GET['UUID'],
            Path = request.GET['V2rayCorePath'],
            Log = request.GET['V2rayLogPath'],
            Level = request.GET['LogLevel'],
            Port = request.GET['Port'],
            Protocol = request.GET['Protocol'],
            DataProtocol = request.GET['DataProtocol']
        ).save()
    else :
        V2rayConfig.objects.filter(UUID = v2rayconf[0].UUID).update(
            UUID = request.GET['UUID'],
            Path = request.GET['V2rayCorePath'],
            Log = request.GET['V2rayLogPath'],
            Level = request.GET['LogLevel'],
            Port = request.GET['Port'],
            Protocol = request.GET['Protocol'],
            DataProtocol = request.GET['DataProtocol']
        )

    shadowsocksconf = V2rayShadowsocks.objects.all()
    if len(shadowsocksconf) == 0:
        V2rayShadowsocks(
            ID = request.GET['ShadowsocksID'],
            Password = request.GET['ShadowsocksPwd']
        ).save()
    else:
        V2rayShadowsocks.objects.filter(ID = shadowsocksconf[0].ID).update(
            ID = request.GET['ShadowsocksID'],
            Password = request.GET['ShadowsocksPwd']
        )
    
    res['data']['msg'] = "OK"
    config = ConfigJson(
        request.GET['V2rayLogPath'], 
        request.GET['LogLevel'], 
        request.GET['Port'], 
        request.GET['DataProtocol'], 
        request.GET['ShadowsocksID'], 
        request.GET['ShadowsocksPwd'], 
        request.GET['Protocol'], 
        request.GET['UUID']
    )
    with open('/etc/v2ray/config.json', 'w+') as f:
        json.dump(config, f)
    os.system('sudo systemctl restart v2ray')
    res = JsonResponse(res)
    return res

def ConfigJson(logpath, loglevel, port, dataprotocol, ssID, ssPWD, protocol, uuid):
    inboundsetting = {}
    if dataprotocol == 'Shadowsocks':
        inboundsetting['email'] = ssID
        inboundsetting['method'] = 'aes-128-gcm'
        inboundsetting['password'] = ssPWD
        inboundsetting['level'] = 0
        inboundsetting['ota'] = False
        inboundsetting['network'] = "tcp"
    elif dataprotocol == 'Vmess':
        inboundsetting['clients'] = []
        clients = {}
        clients['id'] = uuid
        clients['alterId'] = 32
        inboundsetting['clients'].append(clients)

    jsonstr = {}

    log = {}
    log['access'] = '{}/access.log'.format(logpath)
    log['error'] = '{}/error.log'.format(logpath)
    log['loglevel'] = loglevel.lower()

    dns = {}
    stats = {}

    inbounds = []
    inbound = {}
    inbound['port'] = int(port)
    inbound['protocol'] = dataprotocol.lower()
    inbound['settings'] = inboundsetting
    streamsettings = {}
    if protocol == 'mkcp':
        streamsettings['network'] = 'kcp'
    elif protocol == 'tcp':
        streamsettings['network'] = 'tcp'
    streamsettings['security'] = 'none'
    streamsettings['{}Settings'.format(streamsettings['network'])] = {}
    inbound['streamSettings'] = streamsettings
    inbounds.append(inbound)

    outbounds = []
    outbound_direct = {}
    outbound_direct['tag'] = 'direct'
    outbound_direct['protocol'] = 'freedom'
    outbound_direct['settings'] = {}
    outbound_blocked = {}
    outbound_blocked['tag'] = 'blocked'
    outbound_blocked['protocol'] = 'blackhole'
    outbound_blocked['settings'] = {}
    outbounds.append(outbound_direct)
    outbounds.append(outbound_blocked)

    rounting = {}
    rounting['domainStrategy'] = 'AsIs'
    rounting['rules'] = [{}]
    rounting['rules'][0]['type'] = 'field'
    rounting['rules'][0]['ip'] = ['geoip:private']
    rounting['rules'][0]['outboundTag'] = 'blocked'

    policy = {}
    reverse = {}
    transport = {}

    jsonstr['log'] = log
    jsonstr['dns'] = dns
    jsonstr['stats'] = stats
    jsonstr['inbounds'] = inbounds
    jsonstr['outbounds'] = outbounds
    jsonstr['rounting'] = rounting
    jsonstr['policy'] = policy
    jsonstr['reverse'] = reverse
    jsonstr['transport'] = transport
    return jsonstr

def V2rayControl(request):
    res = {}
    res['code'] = 0
    res['data'] = {}
    res['data']['msg'] = "OK"
    os.system('sudo systemctl {} v2ray'.format(request.GET['cmd']))
    res = JsonResponse(res)
    return res