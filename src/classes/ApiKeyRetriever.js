//Retrieves Api Keys from server to start working with api
class ApiKeyRetriever {
    async getApiCredentials(apiBaseUrl) {
        var res = await fetch(`${apiBaseUrl}/credentials`)
        return res.json()
    }
}
export default ApiKeyRetriever
