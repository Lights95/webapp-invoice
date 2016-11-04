/*jshint esversion: 6*/
import React from "react";

export default class LetterEnd extends React.Component {
    render() {
        var data = this.props;

        return (
            <section class="inv-final">
                <p class="inv-final__text">
                    Bitte überweisen Sie die Rechnungssumme auf das unten angegebene Konto.<br/>
                    Im Verwendungszweck erwähnen Sie bitte die Rechnungsnummer.
                </p>
                <p>
                    Mit freundlichen Grüßen,<br/>
                    {data.dataContactPerson.firstName} {data.dataContactPerson.lastName}
                </p>
            </section>
        );
    }
}
