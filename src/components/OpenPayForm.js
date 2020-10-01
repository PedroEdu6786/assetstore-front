import React, { useEffect } from 'react'

const OpenPay = window.OpenPay;

const OPENPAY_ID = 'clave'
const OPENPAY_API_KEY = 'clave-2'
const OpenPayForm = () => {

    var deviceSessionId;

    useEffect(() => {
        OpenPay.setId(OPENPAY_ID);
        OpenPay.setApiKey(OPENPAY_API_KEY);
        OpenPay.setSandboxMode(true);
        deviceSessionId = OpenPay.deviceData.setup("payment-form", "deviceIdHiddenFieldName");
    }, [])

    function handleClick(e) {
        e.preventDefault();
        // document.getElementById("pay-button").disabled = true;
        // OpenPay.token.extractFormAndCreate('payment-form', success_callback, error_callback);
        OpenPay.token.create({
            "card_number": "4111111111111111",
            "holder_name": "Juan Perez Ramirez",
            "expiration_year": "20",
            "expiration_month": "12",
            "cvv2": "110",
            "address": {
                "city": "Querétaro",
                "line3": "Queretaro",
                "postal_code": "76900",
                "line1": "Av 5 de Febrero",
                "line2": "Roble 207",
                "state": "Queretaro",
                "country_code": "MX"
            }
        }, success_callback, error_callback);
    }

    var success_callback = function (response) {
        var token_id = response.data.id;
        console.log(token_id);
        document.getElementById('token_id').value = token_id
        chargePayment(token_id)
        // document.getElementById('payment-form').submit();
    };

    var error_callback = function (response) {
        var desc = response.data.description != undefined ?
            response.data.description : response.message;
        alert("ERROR [" + response.status + "] " + desc);
        document.getElementById("pay-button").disabled = false;
    };

    var chargePayment = async function chargePayment(token_id) {

        const url = "http://localhost:8080/charge";

        let bod = {
            "customer": {
                name: "Pedro Eduardo",
                lastName: "Cruz de la Fuente",
                phoneNumber: "9993492510",
                email: "raul@gmail.com"
            },
            "tokenId": token_id,
            "deviceSessionId": deviceSessionId,
            "amount": 100,
            "description": "Raul es puto"
        }

        const res = await fetch(url, {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bod)
        });

        console.log(bod)
        console.log(res.json())
    }
    return (
        <form action="#" method="POST" id="payment-form">
            <input type="hidden" name="token_id" id="token_id" />
            <input type="hidden" name="use_card_points" id="use_card_points" value="false" />
            <div className="pymnt-itm card active">
                <h2>Tarjeta de crédito o débito</h2>
                <div className="pymnt-cntnt">
                    <div className="card-expl">
                        <div className="credit"><h4>Tarjetas de crédito</h4></div>
                        <div className="debit"><h4>Tarjetas de débito</h4></div>
                    </div>
                    <div className="sctn-row">
                        <div className="sctn-col l">
                            <label>Nombre del titular</label><input type="text" placeholder="Como aparece en la tarjeta" autoComplete="off" data-openpay-card="holder_name" />
                        </div>
                        <div className="sctn-col">
                            <label>Número de tarjeta</label><input type="text" autoComplete="off" data-openpay-card="card_number" /></div>
                    </div>
                    <div className="sctn-row">
                        <div className="sctn-col l">
                            <label>Fecha de expiración</label>
                            <div className="sctn-col half l"><input type="text" placeholder="Mes" data-openpay-card="expiration_month" /></div>
                            <div className="sctn-col half l"><input type="text" placeholder="Año" data-openpay-card="expiration_year" /></div>
                        </div>
                        <div className="sctn-col cvv"><label>Código de seguridad</label>
                            <div className="sctn-col half l"><input type="text" placeholder="3 dígitos" autoComplete="off" data-openpay-card="cvv2" /></div>
                        </div>
                    </div>
                    <div className="openpay"><div className="logo">Transacciones realizadas vía:</div>
                        <div className="shield">Tus pagos se realizan de forma segura con encriptación de 256 bits</div>
                    </div>
                    <div className="sctn-row">
                        <button className="button rght" id="pay-button" onClick={handleClick}>Pagar</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default OpenPayForm
