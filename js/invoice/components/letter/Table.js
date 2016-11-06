/*jshint esversion: 6*/
import React from "react";
import TableElement from "./TableElement";

export default class Table extends React.Component {
    render() {
        var TableElements = this.props.tableElements.map((data, i) => <TableElement key={i} data={data}/>);

        return (
            <section ref="table" class="inv-table">
                {TableElements}
            </section>
        );
    }
}
