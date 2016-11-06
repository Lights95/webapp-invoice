/*jshint esversion: 6*/
import React from "react";
import InvoicePage from "./InvoicePage";

export default class Invoice extends React.Component {
    constructor() {
        super();
        this.state = {
            pages: 1
        };
    }
    newPage(e, letterEnd, total, table) {
        console.log(e,letterEnd, total, table);
        this.setState(
            {
                pages: 2,
                overflow: e,
                letterEnd: letterEnd
            }
        );
    }

    render() {
        var invoicePages = [];
        var config = [];

        for (var i=0; i<this.state.pages; i++) {
            config[i] = {
                table: false,
                total: false,
                end: false,

                totalPages: this.state.pages,
                page: 1+i
            };
            invoicePages[i] = <InvoicePage key={i} newPage={this.newPage.bind(this)} data={this.props.data} config={config[i]}/>;
        }

        config[0].header = true;
        config[0].introduction = true;
        config[0].table = true;
        config[0].end = true;
        config[0].total = true;

        if(this.state.overflow>0) {
            config[0].end = false;
            config[1].end = true;

            if(this.state.overflow>this.state.letterEnd) {
                config[0].total = false;
                config[1].total = true;
                if(this.state.overflow>this.state.letterEnd.total) {
                    console.log("hi");
                }
            }
        }

        return (
            <div>
                {invoicePages}
            </div>
        );

    }
}
