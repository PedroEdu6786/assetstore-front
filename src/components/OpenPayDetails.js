import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import TokenIdGenerator from "../classes/TokenIdGenerator";

const OpenPay = window.OpenPay;

export class OpenPayDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        if (this.props.validInputs("payment-form")) {
            this.generateTokenId();
            this.props.nextStep();
        } else {
            alert("input missing");
        }
    };

    generateTokenId = () => {
        new TokenIdGenerator().generateTokenId(
            OpenPay,
            this.props.address,
            this.props.card_values
        );
    };

    previous = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { card_values, handleChange } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar
                        title="Payment Details"
                        showMenuIconButton={false}
                    />
                    <form id="payment-form">
                        <TextField
                            hintText="Enter card's holder name"
                            floatingLabelText="Holder name"
                            data-openpay-card="holder_name"
                            onChange={handleChange("holder_name")}
                            defaultValue={card_values.holder_name}
                        />
                        <br />
                        <TextField
                            hintText="Enter your card number"
                            floatingLabelText="Card Number"
                            data-openpay-card="card_number"
                            onChange={handleChange("card_number")}
                            defaultValue={card_values.card_number}
                        />
                        <br />
                        <TextField
                            hintText="Enter expiration month"
                            floatingLabelText="Expiration Month"
                            data-openpay-card="expiration_month"
                            onChange={handleChange("expiration_month")}
                            defaultValue={card_values.expiration_month}
                        />
                        <br />
                        <TextField
                            hintText="Enter expiration year"
                            floatingLabelText="Expiration Year"
                            data-openpay-card="expiration_year"
                            onChange={handleChange("expiration_year")}
                            defaultValue={card_values.expiration_year}
                        />
                        <br />
                        <TextField
                            hintText="Enter your security code"
                            floatingLabelText="Security Code"
                            data-openpay-card="cvv2"
                            onChange={handleChange("cvv2")}
                            defaultValue={card_values.cvv2}
                        />
                        <br />
                    </form>
                    <RaisedButton
                        label="Go Back"
                        primary={true}
                        style={styles.button}
                        onClick={this.previous}
                    />
                    <RaisedButton
                        id="pay-button"
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 15,
    },
};

export default OpenPayDetails;
