import OpenPay from './OpenPay'
import address from '../utils/addressDetails'

class TokenGenerator {
    generateToken(form, handleSuccess, handleError) {
        var tokenObj = {
            card_number: form.elements[1].value,
            holder_name: form.elements[0].value,
            expiration_year: form.elements[2].value,
            expiration_month: form.elements[3].value,
            cvv2: form.elements[4].value,
            address,
        }

        OpenPay.token.create(tokenObj, handleSuccess, handleError)
    }
}

export default new TokenGenerator()
