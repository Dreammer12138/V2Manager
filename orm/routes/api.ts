import express = require('express');
const router = express.Router();
const child = require('child_process');

import "reflect-metadata";
import { createConnection } from "typeorm";
import { Config } from "../src/entity/Config";

const connect = createConnection()

router.post('/login', function (req, res, next) {
    var result = {};
    result['code'] = 1;
    result['msg'] = "OK";
    res.send(result);
});

router.post('/updateConfig', function (req, res, next) {
    var params = req.body.configs;
    var result = {};
    connect.then(async connection => {
        let configRespository = connection.getRepository(Config);
        let configToUpdate = await configRespository.findOne(1);
        configToUpdate.V2rayCorePath = params.V2rayCorePath.value;
        configToUpdate.V2rayLogPath = params.V2rayLogPath.value;
        configToUpdate.V2rayLogLevel = params.V2rayLogLevel.value;
        configToUpdate.ListenPort = params.ListenPort.value;
        configToUpdate.Protocol = params.Protocol.value;
        configToUpdate.UUID = params.UUID.value;
        await configRespository.save(configToUpdate);
        result['code'] = 1;
        result['msg'] = "OK";
        res.send(result);
    }).catch(error => {
        result['code'] = 0;
        result['msg'] = error;
        res.send(result);
    })
});

router.get('/getConfig', function (req, res, next) {
    connect.then(async connection => {
        let configRespository = connection.getRepository(Config);
        let configData = await configRespository.findOne(1);
        res.send(configData);
    })
})

router.get('/getStatus', function (req, res, next) {
    var pid = '';
    child.exec('ps -ef | grep v2ray | grep -v grep | awk \'{print $2}\'', (err, sto) => {
        pid = sto;
    })
    if (pid !== '') res.send({StatusCode: 1});
    else res.send({StatusCode: 0});
})

router.get('/getLog', function (req, res, next) {
    var log = '';
    var logPath = '';
    connect.then(async connection => {
        let configRespository = connection.getRepository(Config);
        let configData = await configRespository.findOne(1);
        logPath = configData.V2rayLogPath;
    })
    child.exec('cat ' + logPath + '/access.log', (err, sto) => {
        log = sto;
    })
    res.send({V2rayLog:log});
})

export { router };