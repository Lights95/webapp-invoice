/*jshint esversion: 6*/
import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class ServicesStore extends EventEmitter {
    constructor() {
        super();
        this.services = [[
            {
                id: 0,
                date: "27.07.2016",
                description: "Lorem Ipsum dolor sit",
                hours: 2.5,
                fee: 60
            }
        ]];
    }

    getAll() {
        return this.services;
    }

    newServicesArray() {
        this.services[this.services.length] = [];
    }

    popServiceOf(e) {
        this.services[e+1].unshift(this.services[e].pop());
        this.emit("change");
    }

    init(services) {
        this.services[0] = services;
    }

    handleActions(action)  {
        switch(action.type) {
            case "INIT_SERVICES": {
                this.init(action.services);
                break;
            }
        }
    }

}

const servicesStore = new ServicesStore();
dispatcher.register(servicesStore.handleActions.bind(servicesStore));

export default servicesStore;
