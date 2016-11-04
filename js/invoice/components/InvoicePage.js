/*jshint esversion: 6*/
import React from "react";
import InvoiceLetter from "./InvoiceLetter";
import InvoiceFooter from "./InvoiceFooter";
import TableElement from "./letter/TableElement";
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

        var TableElements = data.services.map((data, i) => <TableElement key={i} data={data}/>);

        return (
            <article class="inv-invoice__paper">
                <div class="mark-mid"></div>
                <main ref="mainpart" class="inv-letter">
                    <section class="inv-table">
                        {TableElements}
                    </section>
                    <section>
                        <div class="inv-total">Summe: {data.total.toFixed(2)} €</div>
                        <p class="inv-note">Hinweis: Gemäß §19 Abs. 1 UStG wird keine Umsatzsteuer erhoben.</p>
                    </section>
                    <LetterEnd dataContactPerson={data.user.contactPerson}/>
                </main>
                <InvoiceFooter ref="pageFooter0" dataUser={data.user} currentSite={this.props.currentSite} totalSites={this.props.totalSites}/>
            </article>
        );
    }
}
