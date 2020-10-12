import PaymentMethod from './PaymentMethod'

class OpenPayPayment extends PaymentMethod {
    constructor(customer) {
        super()
        this.customer = customer
    }
    async charge() {
        var res = await fetch(`http://localhost:8080/charge`, {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.customer),
        })

        return res.json()
    }
}

export default OpenPayPayment
