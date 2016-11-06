/*jshint esversion: 6*/
import React from "react";
import Introduction from "./letter/Introduction";
import LetterEnd from "./letter/LetterEnd";
import Total from "./letter/Total";
import Table from "./letter/Table";

export default class InvoiceLetter extends React.Component {
    render() {
        var data = this.props;

        return (
            <main ref="mainpart" class="inv-letter">
                <Introduction dataContactPerson={data.dataClientContactPerson} invoiceId={data.invoiceId}/>
                <Table tableElements={data.tableElements}/>
                <Total total={data.total}/>
                <LetterEnd dataContactPerson={data.dataUserContactPerson}/>
            </main>
        );
    }
}
