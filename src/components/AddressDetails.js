import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class AddressDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        if (this.props.validInputs("user_address")) {
            if (!this.validCountry()) {
                alert("Country code not valid");
                return;
            }
            this.props.nextStep();
        } else {
            alert("input missing");
        }
    };

    validCountry = () => {
        var country_code = document.getElementById("country_code").value;
        return country_code.split(" ")[0].length > 2 ? false : true;
    };

    previous = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar
                        title="Address Details"
                        showMenuIconButton={false}
                    />
                    <form id="user_address">
                        <TextField
                            hintText="Enter address"
                            floatingLabelText="Address"
                            onChange={handleChange("line1")}
                            defaultValue={values.line1}
                        />
                        <br />
                        <TextField
                            hintText="Enter line 2"
                            floatingLabelText="Line2"
                            onChange={handleChange("line2")}
                            defaultValue={values.line2}
                        />
                        <br />
                        <TextField
                            hintText="Enter line3"
                            floatingLabelText="Line3"
                            onChange={handleChange("line3")}
                            defaultValue={values.line3}
                        />
                        <br />
                        <TextField
                            hintText="Enter your city"
                            floatingLabelText="City"
                            onChange={handleChange("city")}
                            defaultValue={values.city}
                        />
                        <br />
                        <TextField
                            hintText="Enter your state"
                            floatingLabelText="State"
                            onChange={handleChange("state")}
                            defaultValue={values.state}
                        />
                        <br />
                        <TextField
                            id="country_code"
                            hintText="MX"
                            floatingLabelText="Country Code"
                            onChange={handleChange("country_code")}
                            defaultValue={values.country_code}
                            maxLength="2"
                        />
                        <br />
                        <TextField
                            hintText="11111"
                            floatingLabelText="Postal Code"
                            onChange={handleChange("postal_code")}
                            defaultValue={values.postal_code}
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

export default AddressDetails;
