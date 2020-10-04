import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export class FormUserDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        if (this.props.validInputs("user_info")) {
            this.props.nextStep();
        } else {
            alert("input missing");
        }
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="User Details" showMenuIconButton={false} />
                    <form id="user_info">
                        <TextField
                            hintText="Enter first name"
                            floatingLabelText="First Name"
                            onChange={handleChange("name")}
                            defaultValue={values.name}
                            required
                        />
                        <br />
                        <TextField
                            hintText="Enter last name"
                            floatingLabelText="Last Name"
                            onChange={handleChange("lastName")}
                            defaultValue={values.lastName}
                            required
                        />
                        <br />
                        <TextField
                            hintText="Enter email"
                            floatingLabelText="Email"
                            onChange={handleChange("email")}
                            defaultValue={values.email}
                            required
                        />
                        <br />
                        <TextField
                            hintText="Enter phone"
                            floatingLabelText="Phone Number"
                            onChange={handleChange("phoneNumber")}
                            defaultValue={values.phoneNumber}
                            required
                        />
                        <br />
                    </form>
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

export default FormUserDetails;
