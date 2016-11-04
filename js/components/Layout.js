/*jshint esversion: 6*/
import React from "react";
import Invoice from "../invoice/components/Invoice";

export default class Layout extends React.Component {
    render() {
        return (
            <Invoice data={this.props.data}/>
        );
    }
}
