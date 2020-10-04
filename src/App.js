import React, { Component } from "react";
import { UserForm } from "./components/UserForm";

export class App extends Component {
    render() {
        return (
            <React.Fragment>
                <UserForm />
            </React.Fragment>
        );
    }
}

export default App;
