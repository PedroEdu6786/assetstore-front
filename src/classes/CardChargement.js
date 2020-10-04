class CardChargement {
    constructor(customer) {
        this.customer = customer;
    }

    async paymentCharge(apiBaseUrl) {
        var res = await fetch(`${apiBaseUrl}/charge`, {
            method: "POST",
            mode: "cors", // no-cors, *cors, same-origin
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.customer),
        });

        if (res.ok) {
            return res.json();
        } else {
            return res;
        }
    }
}

export default CardChargement;
