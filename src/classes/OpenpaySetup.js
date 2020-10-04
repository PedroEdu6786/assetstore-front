class OpenpaySetup {
    setApiKeys(OpenPay, OPENPAY_ID, OPENPAY_API_KEY) {
        OpenPay.setId(OPENPAY_ID);
        OpenPay.setApiKey(OPENPAY_API_KEY);
        OpenPay.setSandboxMode(true);
    }
}

export default OpenpaySetup;
