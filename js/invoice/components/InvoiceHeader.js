/*jshint esversion: 6*/
import React from "react";

export default class InvoiceHeader extends React.Component {
    render() {
        var data = this.props;

        var dataClient = data.dataClient;
        var dataUser = data.dataUser;
        var date = data.date;
        var invoiceId = data.invoiceId;

        return (
            <header class="inv-header">
                <section class="inv-from">
                    <ul class="inv-list inv-list--right">
                        <li>{dataUser.name}</li>
                        <li>{dataUser.contactPerson.firstName} {dataUser.contactPerson.lastName}</li>
                        <li>{dataUser.address.street}</li>
                        <li>{dataUser.address.zip} {dataUser.address.city}</li>
                        <li>{dataUser.address.country}</li>
                    </ul>
                    <ul class="inv-list inv-list--right inv-data">
                        <li>Kunden-Nr.: <span class="inv-data__element">{dataClient.id}</span></li>
                        <li>Rechnungs-Nr.: <span class="inv-data__element">{invoiceId}</span></li>
                    </ul>
                </section>

                <section class="inv-to">
                    <div class="inv-to__from-addr inv-font--sm">
                        <span>{dataUser.contactPerson.firstName} {dataUser.contactPerson.lastName}</span>
                        <span>{dataUser.address.street}</span>
                        <span>{dataUser.address.zip} {dataUser.address.city}</span>
                    </div>
                    <ul class="inv-list inv-to__address">
                        <li>{dataClient.name}</li>
                        <li>{dataClient.contactPerson.firstName} {dataClient.contactPerson.lastName}</li>
                        <li>{dataClient.address.street}</li>
                        <li>{dataClient.address.zip} {dataClient.address.city}</li>
                    </ul>
                </section>

                <span class="inv-header__date">{date}</span>
                <div class="mark-top"></div>
                <div class="mark-top mark--right"></div>
            </header>
        );
    }
}
