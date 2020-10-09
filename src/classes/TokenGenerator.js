import OpenPay from './OpenPay'

class TokenGenerator {
    generateToken(form, handleSuccess, handleError) {
        OpenPay.token.extractFormAndCreate(form, handleSuccess, handleError)
    }
}

export default new TokenGenerator()
