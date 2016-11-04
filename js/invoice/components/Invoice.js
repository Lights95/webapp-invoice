/*jshint esversion: 6*/
import React from "react";
import InvoiceFrontPage from "./InvoiceFrontPage";
import InvoicePage from "./InvoicePage";

export default class Invoice extends React.Component {
    constructor() {
        super();
        this.state = {
            pages: 1,
            page: [
                {
                    config: {
                        showEnd: false,
                        showTotal: false,
                        showElements: false
                    }
                }
            ]
        };
    }
    newPage(e) {
        this.setState(
            {
                pages: 2,
                page: [
                    {
                        config: {
                            showEnd: false,
                            showTotal: true,
                            showElements: true
                        }
                    }
                ]
            }
        );
    }

    render() {
        var pages = this.state.pages;
        var invoice;

        if (pages > 1) {
            invoice =
                <div>
                    <InvoiceFrontPage data={this.props.data} currentSite={1} totalSites={pages} />
                    <InvoicePage data={this.props.data} currentSite={2} totalSites={pages} />
                </div>;
        }
        else {
            invoice = <InvoiceFrontPage newPage={this.newPage.bind(this)} data={this.props.data} currentSite={1} totalSites={pages} config={this.state.page[0].config}/>;
        }

        return (
            <div>
                {invoice}
            </div>
        );
    }
}
