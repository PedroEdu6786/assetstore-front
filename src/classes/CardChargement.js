class CardChargement {
    async paymentCharge(apiBaseUrl) {
        var res = await fetch(`${apiBaseUrl}/charge`, {
            method: "POST",
            mode: "cors", // no-cors, *cors, same-origin
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(),
        });

        return res.json();
    }
}

export default CardChargement;
