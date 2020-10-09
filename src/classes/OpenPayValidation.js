import OpenPay from './classes/OpenPay'

class OpenPayValidation {
    validCard(card) {
        OpenPay.card.validateCardNumber(card)
    }

    validCvc(cvc) {
        OpenPay.card.validateCVC(cvc)
    }

    validDate(month, year) {
        OpenPay.card.validateExpiry(month, year)
    }
}

export default new OpenPayValidation()
