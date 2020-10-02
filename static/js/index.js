$(() => {
    var dataProtocol = $('#Data_protocol')
    dataProtocol.change(function() {
        ShadowsocksConfig(this)
    })


    $('#UuidUpdate').click(() => {
        updateUUID()
    })

    $('#SubmitConfig').click(() => {
        updateConfig()
    })
})

function droplistselected(t) {
    value = $(t).text()
    button = $(t).parent().parent().children()[0]
    $(button).text(value)
}

function updateUUID() {
    $.get('/updateUUID', {}, (res) => {
        if (res['code'] == 0)
            alert('无法获取UUID')
        else {
            $('#UUID').val(res['data']['uuid'])
        }
    })
}

function updateConfig() {
    $.get('/updateConfig', {
        V2rayCorePath   : $('#V2rayCorePath').val(),
        V2rayLogPath    : $('#V2rayLogPath').val(),
        LogLevel        : $('#loglevel').val(),
        Port            : $('#Port').val(),
        Protocol        : $('#Protocol').val(),
        UUID            : $('#UUID').val(),
        DataProtocol    : $('#Data_protocol').val(),
        ShadowsocksID   : $('#Data_protocol').val() === 'Vmess' ? '' : $('#ShadowsocksID').val(),
        ShadowsocksPwd  : $('#Data_protocol').val() === 'Vmess' ? '' : $('#ShadowsocksPwd').val()
    }, (res) => {
        if (res['code'] == 0)
            alert('V2ray配置更新失败')
        else {
            alert('V2ray配置已更新')
            window.location.reload()
        }
    })
}

function ShadowsocksConfig(t) {
    if ($(t).val() === "Vmess")
        $('#Shadowsocks').fadeOut('fast')
    else 
        $('#Shadowsocks').fadeIn('fast')
}

function V2rayControl(cmd) {
    $.get('/v2raycontrol', {
        cmd: cmd
    }, (res) => {
        console.log(res)
        window.location.reload()
    })
}