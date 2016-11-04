/*jshint esversion: 6*/
import React from "react";

export default class TableElement extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <div class="inv-table__element">
                <div class="inv-table__position">#{data.position}</div>
                <div class="inv-table__description">
                    <span>{data.date} </span>
                    <span><i class="material-icons">keyboard_arrow_right</i></span>
                    <span>{data.description}</span>
                </div>
                <div class="inv-table__price">
                    {data.hours.toFixed(2)} Std. x {data.fee.toFixed(2)} €/Std. = <span class="inv-table__price-tag">{data.total.toFixed(2)} €</span>
                </div>
            </div>
        );
    }
}
