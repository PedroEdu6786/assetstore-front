class ApiCredentials {
    async getApiCredentials(apiBaseUrl) {
        var res = await fetch(`${apiBaseUrl}/credentials`);
        return res.json();
    }
}

export default ApiCredentials;
