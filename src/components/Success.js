import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export class Success extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success" showMenuIconButton={false} />
                    <h1>Thank you for submission</h1>
                    <p>The charges will be reflected immediately</p>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default Success;
