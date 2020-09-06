import HttpClient from "./client";
import { AxiosRequestConfig } from "axios";
const BASEURL = "https://www.castlery.com/api/story_bloks";
class Requset extends HttpClient {
  public constructor() {
    super(BASEURL);
    this._initializeRequestInterceptor();
  }
  private _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(
      this._handleRequest,
      this._handleError
    );
  };
  private _handleRequest(config: AxiosRequestConfig) {
    config.headers["Content-Type"] = "application/json";
    //config.withCredentials = true;
    return config;
  }
  public get(url: string, params?: any) {
    return this.instance.get(url, { params });
  }
  public post(data: any) {
    return this.instance.post(data);
  }
}
const request = new Requset();
export default request;
