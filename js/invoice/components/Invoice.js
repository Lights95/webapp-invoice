/*jshint esversion: 6*/
import React from "react";
import InvoicePage from "./InvoicePage";
import ServicesStore from "../../stores/ServicesStore";
import ConfigStore from "../../stores/ConfigStore";

import * as ServicesActions from "../../actions/ServicesActions";

export default class Invoice extends React.Component {
    constructor() {
        super();
        this.state = {
            services: ServicesStore.getAll(),
            configs : ConfigStore.getAll()
        };
    }

    componentWillMount() {
        ConfigStore.on("change", () => {
            this.setState({
                services: ServicesStore.getAll(),
                configs : ConfigStore.getAll()
            });
        });

        ServicesStore.on("change", () => {
            this.setState({
                services: ServicesStore.getAll(),
                configs : this.state.configs
            });
        });
    }

    render() {
        ServicesActions.initServices(this.props.data.services);
        var invoicePages = [];
        var config = this.state.configs;

        for (var i=0; i<this.state.configs.length; i++) {
            config[i].page = i;
            invoicePages[i] = <InvoicePage key={i} data={this.props.data} tableElements={this.state.services[i]} config={config[i]}/>;
        }

        return (
            <div>
                {invoicePages}
            </div>
        );

    }
}
