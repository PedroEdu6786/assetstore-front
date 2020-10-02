import React from "react";
import SessionIdGenerator from "../classes/SessionIdGenerator";
import OpenpaySetup from "../classes/OpenpaySetup";
import TokenIdGenerator from "../classes/TokenIdGenerator";
import CustomerDTO from "../classes/CustomerDTO";
import CardChargement from "../classes/CardChargement";

// API KEYS
const OpenPay = window.OpenPay;
const OPENPAY_ID = process.env.REACT_APP_OPENPAY_ID;
const OPENPAY_API_KEY = process.env.REACT_APP_OPENPAY_API_KEY;
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

//OpenPay keys setup, and sessionId generation
var setup = new OpenpaySetup(OpenPay);
setup.setApiKeys(OPENPAY_ID, OPENPAY_API_KEY);
var idGenerator = new SessionIdGenerator();
var sessionId = idGenerator.generateSessionId(OpenPay);

const OpenPayForm = () => {
    function handleClick(e) {
        e.preventDefault();
        new TokenIdGenerator().generateTokenId(OpenPay, handleSubmit);
    }

    function handleSubmit(e) {
        var tokenId = document.getElementById("token_id").value;
        var customer = new CustomerDTO();
        customer.setAmount(200);
        customer.setCustomer({
            customer: {
                name: "Pedro Eduardo",
                lastName: "Cruz de la Fuente",
                phoneNumber: "9993492510",
                email: "raul@gmail.com",
            },
        });
        customer.setDeviceSessionId(sessionId);
        customer.setDescription("Raul es puto");
        customer.setTokenId(tokenId);

        console.log(tokenId);
        console.log(customer);

        var card = new CardChargement();
        var data = card.paymentCharge(API_BASE_URL);
        //console.log(data);
    }

    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            <input type="hidden" name="token_id" id="token_id" />
            <input
                type="hidden"
                name="use_card_points"
                id="use_card_points"
                value="false"
            />
            <div className="pymnt-itm card active">
                <h2>Tarjeta de crédito o débito</h2>
                <div className="pymnt-cntnt">
                    <div className="card-expl">
                        <div className="credit">
                            <h4>Tarjetas de crédito</h4>
                        </div>
                        <div className="debit">
                            <h4>Tarjetas de débito</h4>
                        </div>
                    </div>
                    <div className="sctn-row">
                        <div className="sctn-col l">
                            <label>Nombre del titular</label>
                            <input
                                type="text"
                                placeholder="Como aparece en la tarjeta"
                                autoComplete="off"
                                data-openpay-card="holder_name"
                            />
                        </div>
                        <div className="sctn-col">
                            <label>Número de tarjeta</label>
                            <input
                                type="text"
                                autoComplete="off"
                                data-openpay-card="card_number"
                            />
                        </div>
                    </div>
                    <div className="sctn-row">
                        <div className="sctn-col l">
                            <label>Fecha de expiración</label>
                            <div className="sctn-col half l">
                                <input
                                    type="text"
                                    placeholder="Mes"
                                    data-openpay-card="expiration_month"
                                />
                            </div>
                            <div className="sctn-col half l">
                                <input
                                    type="text"
                                    placeholder="Año"
                                    data-openpay-card="expiration_year"
                                />
                            </div>
                        </div>
                        <div className="sctn-col cvv">
                            <label>Código de seguridad</label>
                            <div className="sctn-col half l">
                                <input
                                    type="text"
                                    placeholder="3 dígitos"
                                    autoComplete="off"
                                    data-openpay-card="cvv2"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="openpay">
                        <div className="logo">
                            Transacciones realizadas vía:
                        </div>
                        <div className="shield">
                            Tus pagos se realizan de forma segura con
                            encriptación de 256 bits
                        </div>
                    </div>
                    <div className="sctn-row">
                        <button
                            className="button rght"
                            id="pay-button"
                            onClick={handleClick}
                        >
                            Pagar
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default OpenPayForm;
