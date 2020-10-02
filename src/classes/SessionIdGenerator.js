class SessionIdGenerator {
    generateSessionId(Openpay) {
        return Openpay.deviceData.setup(
            "payment-form",
            "deviceIdHiddenFieldName"
        );
    }
}

export default SessionIdGenerator;
