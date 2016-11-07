/*jshint esversion: 6*/
import { EventEmitter } from "events";

class ConfigStore extends EventEmitter {
    constructor() {
        super();
        this.config = [{
            header: true,
            introduction: true,
            table: true,
            total: true,
            end: true,
        }];
    }

    getAll() {
        return this.config;
    }

    changeConfig(e, newConfig) {
        this.config[e] = newConfig;
        this.emit("change");
    }
}

const configStore = new ConfigStore();

export default configStore;
