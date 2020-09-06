import axios, { AxiosInstance, AxiosResponse } from 'axios';
declare module 'axios' {
  interface AxiosResponse<T = any> extends Promise<T> {}
}
abstract class HttpClient {
  protected readonly instance: AxiosInstance;
  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
      timeout: 5000,
      withCredentials: true,
    });
    //this._initialzeRequestInterceptor();
    this._initialzeResponseInterceptor();
  }
  private _initialzeResponseInterceptor() {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError,
    );
  }
  private _handleResponse({ data }: AxiosResponse) {
    return data;
  }
  protected _handleError(error: any) {
    return Promise.reject(error);
  }
}
export default HttpClient;
