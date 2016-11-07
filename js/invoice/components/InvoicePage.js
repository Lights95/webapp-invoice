/*jshint esversion: 6*/
import React from "react";
import InvoiceHeader from "./InvoiceHeader";
import InvoiceFooter from "./InvoiceFooter";
import Introduction from "./letter/Introduction";
import Total from "./letter/Total";
import Table from "./letter/Table";
import LetterEnd from "./letter/LetterEnd";

import ConfigStore from "../../stores/ConfigStore";
import ServicesStore from "../../stores/ServicesStore";

export default class InvoiceFrontPage extends React.Component {
    componentDidMount() {
        this.checkFormat(this.refs);
    }
    componentDidUpdate() {
        this.checkFormat(this.refs);
    }

    checkFormat(refs) {
        var footerTop, mainHeight, mainTop, main;
        footerTop = refs.pageFooter.refs.footerpart.offsetTop;
        mainHeight = refs.mainpart.clientHeight;
        mainTop = refs.mainpart.offsetTop;

        var config = this.props.config;
        var page = config.page;
        main = mainTop+mainHeight;

        if (main>=footerTop) {

            if(config.end) {
                ConfigStore.changeConfig(page, {
                    header: true,
                    introduction: true,
                    table: true,
                    total: true,
                    end: false
                });
                ConfigStore.changeConfig(page+1, {
                    header: false,
                    introduction: false,
                    table: false,
                    total: false,
                    end: true
                });
            }
            else if (config.total) {
                ConfigStore.changeConfig(page, {
                    header: true,
                    introduction: true,
                    table: true,
                    total: false,
                    end: false
                });
                ConfigStore.changeConfig(page+1, {
                    header: false,
                    introduction: false,
                    table: false,
                    total: true,
                    end: true
                });

            }
            else if (config.table) {
                ConfigStore.changeConfig(page, {
                    header: true,
                    introduction: true,
                    table: true,
                    total: false,
                    end: false
                });
                ConfigStore.changeConfig(page+1, {
                    header: false,
                    introduction: false,
                    table: true,
                    total: true,
                    end: true
                });

                ServicesStore.newServicesArray();
                ServicesStore.popServiceOf(page);
            }

        }
    }

    render() {
        var data = this.props.data;
        var config = this.props.config;

        if (config.header)          config.header = <InvoiceHeader dataClient={data.client} dataUser={data.user} date={this.props.data.date} invoiceId={data.id}/>;
        if (config.introduction)    config.introduction = <Introduction dataContactPerson={data.client.contactPerson} invoiceId={data.id}/>;
        else                        config.introduction = <h1> Rechnung Nr. {data.id} - Seite {config.page}</h1>;
        if (config.table)           config.table = <Table ref="table" tableElements={this.props.tableElements}/>;
        if (config.total)           config.total = <Total ref="total" total={data.total}/>;
        if (config.end)             config.end = <LetterEnd ref="letterEnd" dataContactPerson={data.user.contactPerson}/>;


        return (
            <article class="inv-invoice__paper">
                {config.header}
                <div class="mark-mid"></div>
                <main ref="mainpart" class="inv-letter">
                    {config.introduction}
                    {config.table}
                    {config.total}
                    {config.end}
                </main>
                <InvoiceFooter ref="pageFooter" dataUser={data.user} currentSite={config.page+1} totalSites={ConfigStore.getAll().length}/>
            </article>
        );
    }
}
