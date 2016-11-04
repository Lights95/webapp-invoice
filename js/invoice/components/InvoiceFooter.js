/*jshint esversion: 6*/
import React from "react";

export default class InvoiceFooter extends React.Component {
    render() {
        var data = this.props;
        var dataUser = data.dataUser;
        var sites;

        if (data.totalSites > 1) {
            sites = <span>Seite {data.currentSite}/{data.totalSites}</span>;
        }
        else {
            sites = <br/>;
        }

        return (
            <footer ref="footerpart" class="inv-footer">
                <div class="inv-footer__section-holder">
                    <section class="inv-footer__section">
                        <ul class="inv-list">
                            <li><i class="material-icons">mail_outline</i>{dataUser.email}</li>
                            <li><i class="material-icons">phone</i>{dataUser.phone}</li>
                            <li><i class="material-icons">speaker_phone</i>{dataUser.mobile}</li>
                        </ul>
                    </section>
                    <section class="inv-footer__section">
                        <ul class="inv-list">
                            <li>{dataUser.bankAccount.name}</li>
                            <li><b>{dataUser.bankAccount.iban}</b></li>
                            <li>{dataUser.bankAccount.bic}</li>
                            <li>{dataUser.bankAccount.bank}</li>
                        </ul>
                    </section>
                    <section class="inv-footer__section">
                        <ul class="inv-list">
                            <li>Steuernummer:</li>
                            <li>{dataUser.taxNumber}</li>
                            <li><br/></li>
                            <li>Finanzamt:</li>
                            <li>{dataUser.financialDepartment}</li>
                        </ul>
                    </section>
                </div>
                <div class="inv-footer__section-holder inv-footer__section-holder--bottom">
                    <div class="inv-footer__section--bottom">
                        <br/>
                    </div>
                    <div class="inv-footer__section--bottom">
                        Invoice developed with <i class="material-icons link-style">favorite</i> by <a class="link-style" target="_blank" href="https://www.linkedin.com/in/marvin-klimm">linkedin.com/in/marvin-klimm</a>
                    </div>
                    <div class="inv-footer__section--bottom">
                        {sites}
                    </div>
                </div>
            </footer>
        );
    }
}
