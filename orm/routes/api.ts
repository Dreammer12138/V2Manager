import express = require('express');
const router = express.Router();

import "reflect-metadata";
import { createConnection } from "typeorm";
import { Config } from "../src/entity/Config";

const connect = createConnection()

router.post('/login', function (req, res, next) {
    var parmas = req.body;
    console.log(parmas);
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
    var result = {};
    connect.then(async connection => {
        let configRespository = connection.getRepository(Config);
        let configData = await configRespository.findOne(1);
        res.send(configData);
    })
})

export { router };