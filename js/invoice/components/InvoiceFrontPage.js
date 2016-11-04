/*jshint esversion: 6*/
import React from "react";
import InvoiceHeader from "./InvoiceHeader";
import InvoiceLetter from "./InvoiceLetter";
import InvoiceFooter from "./InvoiceFooter";

export default class InvoiceFrontPage extends React.Component {
    componentDidMount() {
        this.checkFormat(this.refs);
    }
    componentDidUpdate() {
        this.checkFormat(this.refs);
    }

    checkFormat(refs) {
        var footerTop, mainHeight, mainTop, main;
        footerTop = refs.pageFooter0.refs.footerpart.offsetTop;
        mainHeight = refs.pageMain0.refs.mainpart.clientHeight;
        mainTop = refs.pageMain0.refs.mainpart.offsetTop;

        main = mainTop+mainHeight;

        if (main>=footerTop) {
            this.props.newPage("Problem");
        }
    }

    render() {
        var data = this.props.data;

        return (
            <article class="inv-invoice__paper">
                <InvoiceHeader dataClient={data.client} dataUser={data.user} date={data.date} invoiceId={data.id}/>
                <div class="mark-mid"></div>
                <InvoiceLetter ref="pageMain0" invoiceId={data.id} dataClientContactPerson={data.client.contactPerson} tableElements={data.services} dataUserContactPerson={data.user.contactPerson} total={data.total}/>
                <InvoiceFooter ref="pageFooter0" dataUser={data.user} currentSite={this.props.currentSite} totalSites={this.props.totalSites}/>
            </article>
        );
    }
}
