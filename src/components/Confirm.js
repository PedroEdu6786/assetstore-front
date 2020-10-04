import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";
import CustomerDTO from "../classes/CustomerDTO";
import CardChargement from "../classes/CardChargement";

const API_BASE_URL = "http://localhost:8080";

export class Confirm extends Component {
    continue = (e) => {
        e.preventDefault();
        this.handleCharge();
        setTimeout(() => {}, 3000);
        this.props.nextStep();
    };

    handleCharge = () => {
        var token_id = localStorage.getItem("token_card");
        var session_id = localStorage.getItem("session_id");
        var customer = new CustomerDTO();
        customer.setAmount(200);
        customer.setCustomer(this.props.userValues);
        customer.setDeviceSessionId(session_id);
        customer.setDescription("La compra ha sido efectuada");
        customer.setTokenId(token_id);

        var card = new CardChargement(customer);
        var data = card.paymentCharge(API_BASE_URL);
    };

    previous = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {
            values: {
                name,
                lastName,
                email,
                phoneNumber,
                city,
                line1,
                line2,
                postal_code,
                state,
            },
        } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm Data" showMenuIconButton={false} />
                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryText={name}
                        />
                        <ListItem
                            primaryText="Last Name"
                            secondaryText={lastName}
                        />
                        <ListItem primaryText="Email" secondaryText={email} />
                        <ListItem
                            primaryText="Phone Number"
                            secondaryText={phoneNumber}
                        />
                        <ListItem primaryText="City" secondaryText={city} />
                        <ListItem primaryText="Line 1" secondaryText={line1} />
                        <ListItem primaryText="Line 2" secondaryText={line2} />
                        <ListItem primaryText="State" secondaryText={state} />
                        <ListItem
                            primaryText="Postal Code"
                            secondaryText={postal_code}
                        />
                    </List>
                    <RaisedButton
                        label="Go Back"
                        primary={true}
                        style={styles.button}
                        onClick={this.previous}
                    />
                    <RaisedButton
                        label="Confirm & Continue"
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

export default Confirm;
