/*jshint esversion: 6*/
import React from "react";

export default class Total extends React.Component {
    render() {
        return (
            <section ref="total">
                <div class="inv-total">Summe: {this.props.total.toFixed(2)} €</div>
                <p class="inv-note">Hinweis: Gemäß §19 Abs. 1 UStG wird keine Umsatzsteuer erhoben.</p>
            </section>
        );
    }
}
