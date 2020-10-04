class TokenIdGenerator {
    generateTokenId(OpenPay, address, card) {
        OpenPay.token.create(
            {
                ...card,
                address,
            },
            this.success_callback,
            this.error_callback
        );
    }

    success_callback(response) {
        var tokenId = response.data.id;
        localStorage.setItem("token_card", tokenId);
    }

    error_callback(response) {
        var desc =
            response.data.description != undefined
                ? response.data.description
                : response.message;
        alert("ERROR [" + response.status + "] " + desc);
    }
}

export default TokenIdGenerator;
