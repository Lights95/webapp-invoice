/*jshint esversion: 6*/
import React from "react";
import TableElement from "./letter/TableElement";
import Introduction from "./letter/Introduction";
import LetterEnd from "./letter/LetterEnd";

export default class InvoiceLetter extends React.Component {
    render() {
        var data = this.props;

        var TableElements = data.tableElements.map((data, i) => <TableElement key={i} data={data}/>);

        return (
            <main ref="mainpart" class="inv-letter">
                <Introduction dataContactPerson={data.dataClientContactPerson} invoiceId={data.invoiceId}/>
                <section class="inv-table">
                    {TableElements}
                </section>
                <section>
                    <div class="inv-total">Summe: {data.total.toFixed(2)} €</div>
                    <p class="inv-note">Hinweis: Gemäß §19 Abs. 1 UStG wird keine Umsatzsteuer erhoben.</p>
                </section>
                <LetterEnd dataContactPerson={data.dataUserContactPerson}/>
            </main>
        );
    }
}
