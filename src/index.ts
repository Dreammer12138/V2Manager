import "reflect-metadata";
import {createConnection} from "typeorm";
import {Config} from "./entity/Config";

createConnection().then(async connection => {

    /*
    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");
    */
    const config = new Config();
    config.V2rayLogPath = "/var/log/v2ray";
    config.V2rayCorePath = "/usr/bin/v2ray";
    config.V2rayLogLevel = "Warning";
    config.ListenPort = "10090";
    config.Protocol = "tcp";
    config.UUID = "ee48ecf0-0602-11eb-9a04-cb02faac55a3";
    await connection.manager.save(config);

}).catch(error => console.log(error));
