import axios from 'axios'

const httpClient = baseURL => axios.create({
    timeout: 30000,
    headers: {
        'Content-type': 'application/json'
    },
    baseURL
})

export class BaseService {
    constructor(baseURL) {
        this.client = httpClient(baseURL)
    }

    async get(url) {
        const result = await this.client.get(url)

        return result.data
    }

    async post(url, obj) {
        const result = await this.client.post(url, obj)
        return result.data
    }

    async put(url, obj) {
        const result = await this.client.put(url, obj)
        return result.data
    }

    async delete(url, obj) {
        const result = await this.client.delete(url, obj)
        return result.data
    }

}
