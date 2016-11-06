/*jshint esversion: 6*/
import React from "react";
import InvoiceHeader from "./InvoiceHeader";
import InvoiceFooter from "./InvoiceFooter";
import Introduction from "./letter/Introduction";
import Total from "./letter/Total";
import Table from "./letter/Table";
import LetterEnd from "./letter/LetterEnd";

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

        main = mainTop+mainHeight;

        if (main>=footerTop) {
            this.props.newPage(main-footerTop, refs.letterEnd.refs.letterEnd.clientHeight || 0, refs.total.refs.total.clientHeight || 0, refs.table.refs.table.clientHeight || 0);
        }
    }

    render() {
        var data = this.props.data;
        var config = this.props.config;

        if (config.header)          config.header = <InvoiceHeader dataClient={data.client} dataUser={data.user} date={this.props.date} invoiceId={data.id}/>;
        if (config.introduction)    config.introduction = <Introduction dataContactPerson={data.client.contactPerson} invoiceId={data.id}/>;
        else                        config.introduction = <h1> Rechnung Nr. {data.id} - Seite {config.page}</h1>;
        if (config.table)           config.table = <Table ref="table" tableElements={data.services}/>;
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
                <InvoiceFooter ref="pageFooter" dataUser={data.user} currentSite={config.page} totalSites={config.totalPages}/>
            </article>
        );
    }
}
