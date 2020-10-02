class TokenIdGenerator {
    generateTokenId(OpenPay) {
        // document.getElementById("pay-button").disabled = true;
        // OpenPay.token.extractFormAndCreate(
        //     "payment-form",
        //     this.success_callback,
        //     this.error_callback
        // );
        OpenPay.token.create(
            {
                card_number: "4111111111111111",
                holder_name: "Rafael Canto Vázquez",
                expiration_year: "20",
                expiration_month: "12",
                cvv2: "110",
                address: {
                    city: "Peto",
                    line3: "Peto",
                    postal_code: "76900",
                    line1: "Av 5 de Febrero",
                    line2: "Roble 207",
                    state: "Peto",
                    country_code: "MX",
                },
            },
            this.success_callback,
            this.error_callback
        );
    }

    success_callback(response) {
        var tokenId = response.data.id;
        document.getElementById("token_id").value = tokenId;
        document.getElementById("payment-form").submit();
        //chargePayment(token_id)
        // document.getElementById('payment-form').submit();
    }

    error_callback(response) {
        var desc =
            response.data.description != undefined
                ? response.data.description
                : response.message;
        alert("ERROR [" + response.status + "] " + desc);
        document.getElementById("pay-button").disabled = false;
    }
}

export default TokenIdGenerator;
