import axios, { AxiosInstance } from 'axios';

export default class ApiClient {
    private axiosInstance: AxiosInstance;
    private readonly token: string | null = null;
    
    constructor(apiUrl: string) {
        this.axiosInstance = axios.create({
            baseURL: apiUrl,
        });
    }
    
    public async get(url: string) {
        const response = await this.axiosInstance.get(url);
        return response.data;
    }

    public async post(url: string, data: any) {
        const response = await this.axiosInstance.post(url, data);
        return response.data;
    }
}
