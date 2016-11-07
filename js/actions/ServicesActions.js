/*jshint esversion: 6*/
import dispatcher from "../dispatcher";

export function initServices(services) {
    dispatcher.dispatch({
        type: "INIT_SERVICES",
        services
    });
}
