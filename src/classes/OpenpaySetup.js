class OpenpaySetup {
    constructor(OpenPay) {
        this.OpenPay = OpenPay;
    }

    setApiKeys(OPENPAY_ID, OPENPAY_API_KEY) {
        this.OpenPay.setId(OPENPAY_ID);
        this.OpenPay.setApiKey(OPENPAY_API_KEY);
        this.OpenPay.setSandboxMode(true);
    }
}

export default OpenpaySetup;
