import React, { Component } from "react";
import { FormUserDetails } from "../components/FormUserDetails";
import { AddressDetails } from "../components/AddressDetails";
import { OpenPayDetails } from "../components/OpenPayDetails";
import { Confirm } from "../components/Confirm";
import { Success } from "../components/Success";
import OpenpaySetup from "../classes/OpenpaySetup";
import ApiCredentials from "../classes/ApiCredentials";
import SessionIdGenerator from "../classes/SessionIdGenerator";

const OpenPay = window.OpenPay;
const API_BASE_URL = "http://localhost:8080";

export class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            name: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            city: "",
            line3: "",
            postal_code: "",
            line1: "",
            line2: "",
            state: "",
            country_code: "",
            card_number: "",
            holder_name: "",
            expiration_year: "",
            expiration_month: "",
            cvv2: "",
        };
    }

    async componentDidMount() {
        var data = await new ApiCredentials().getApiCredentials(API_BASE_URL);
        const { apiPublicKey, merchantId } = data;
        this.setupApiKeys(apiPublicKey, merchantId);
        this.setupIdSession();
    }

    setupApiKeys = (merchant_id, api_key) => {
        var setup = new OpenpaySetup();
        setup.setApiKeys(OpenPay, api_key, merchant_id);
    };

    setupIdSession = () => {
        var idGenerator = new SessionIdGenerator();
        var session_id = idGenerator.generateSessionId(OpenPay);
        localStorage.setItem("session_id", session_id);
    };

    nextStep = () => {
        var { step } = this.state;
        this.setState({ step: step + 1 });
    };

    prevStep = () => {
        var { step } = this.state;
        this.setState({ step: step - 1 });
    };

    validInputs = (id) => {
        var user_info = document.getElementById(id).elements;

        for (let i = 0; i < user_info.length; i++) {
            if (user_info[i].value.split(" ") == "") return false;
        }

        return true;
    };

    handleChange = (input) => (e) => {
        if (input == "country_code") {
            this.setState({ country_code: e.target.value.toUpperCase() });
            return;
        }

        this.setState({ [input]: e.target.value });
    };

    render() {
        const { step } = this.state;
        const { name, lastName, email, phoneNumber } = this.state;
        const {
            city,
            line3,
            postal_code,
            line1,
            line2,
            state,
            country_code,
        } = this.state;
        const userValues = { name, lastName, email, phoneNumber };
        const addressValues = {
            city,
            line3,
            postal_code,
            line1,
            line2,
            state,
            country_code,
        };

        const {
            card_number,
            holder_name,
            expiration_year,
            expiration_month,
            cvv2,
        } = this.state;

        const card_values = {
            card_number,
            holder_name,
            expiration_year,
            expiration_month,
            cvv2,
        };

        const values = { ...userValues, ...addressValues };

        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={userValues}
                        validInputs={this.validInputs}
                    />
                );
            case 2:
                return (
                    <AddressDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={addressValues}
                        validInputs={this.validInputs}
                    />
                );
            case 3:
                return (
                    <OpenPayDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={userValues}
                        address={addressValues}
                        card_values={card_values}
                        validInputs={this.validInputs}
                    />
                );
            case 4:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                        userValues={userValues}
                    />
                );
            case 5:
                return (
                    <Success
                        userValues={userValues}
                    />
                );
            default:
                return <h1>Failed, reload</h1>;
        }
    }
}

export default UserForm;
