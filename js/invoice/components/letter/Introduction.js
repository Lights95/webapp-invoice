/*jshint esversion: 6*/
import React from "react";

export default class Introduction extends React.Component {
    render() {
        var data = this.props;
        var introduction;

        if(data.dataContactPerson.gender == "female") {
            introduction =
                <p>
                    Sehr geehrte Frau {data.dataContactPerson.lastName},<br/>
                    hiermit stelle ich Ihnen die aufgeführten Leistungen in Rechnung.
                </p>;
        }
        else {
            introduction =
                <p>
                    Sehr geehrter Herr {data.dataContactPerson.lastName},<br/>
                    hiermit stelle ich Ihnen die aufgeführten Leistungen in Rechnung.
                </p>;
        }

        return (
            <section class="inv-intro">
                <h1>Rechnung Nr. {data.invoiceId}</h1>
                {introduction}
            </section>
        );
    }
}
