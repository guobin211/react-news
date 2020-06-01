import axios, { AxiosRequestConfig, AxiosResponse, Canceler } from 'axios'
import { AxiosInstance } from 'axios'
import * as Qs from 'qs'
import { userService } from './user-service'

export type RequestInterceptor = (config: AxiosRequestConfig) => AxiosRequestConfig
export type ResponseInterceptor = (config: AxiosResponse) => AxiosResponse

export interface HttpConfig {
  baseURL?: string
  timeout?: number
  paramsSerializer?: (params: any) => string
  unCancelUrls?: string[]
  requestInterceptors?: RequestInterceptor[]
  responseInterceptors?: ResponseInterceptor[]
}

export class HttpService {
  /**
   * axios实例
   */
  private axios: AxiosInstance
  /**
   * 请求拦截器
   */
  private readonly requestInterceptors: RequestInterceptor[]
  /**
   * 响应拦截器
   */
  private readonly responseInterceptors: ResponseInterceptor[]
  /**
   * 可以重复请求的urls
   */
  private unCancelUrls: string[]
  private pending = new Map<string, Canceler>()
  private readonly baseUrl: string
  constructor(config: HttpConfig) {
    this.baseUrl = config.baseURL || window.location.host
    this.unCancelUrls = config.unCancelUrls || []
    this.requestInterceptors = config.requestInterceptors || []
    this.responseInterceptors = config.responseInterceptors || []
    this.axios = axios.create({
      baseURL: this.baseUrl,
      timeout: config.timeout || 60000,
      paramsSerializer: config.paramsSerializer
        ? config.paramsSerializer
        : (params) => {
            return Qs.stringify(params, { arrayFormat: 'repeat' })
          },
    })
    this.initInterceptors()
  }

  /**
   * 获取axios实例
   */
  getInstance() {
    return this.axios
  }

  /**
   * 初始化拦截器
   */
  private initInterceptors() {
    this.axios.interceptors.request.use((config) => {
      if (!(config.url && this.unCancelUrls.includes(config.url))) {
        this.removePending(config)
        config.cancelToken = new axios.CancelToken((cancel: Canceler) => {
          this.pending.set(this.getRequestKey(config), cancel)
        })
      }
      return config
    })
    for (const requestInterceptor of this.requestInterceptors) {
      this.axios.interceptors.request.use(requestInterceptor)
    }
    for (const responseInterceptor of this.responseInterceptors) {
      this.axios.interceptors.response.use(responseInterceptor)
    }
  }

  /**
   * 取消请求
   * @param config
   */
  private removePending(config: AxiosRequestConfig) {
    const p = this.getRequestKey(config)
    const c = this.pending.get(p) as Canceler
    if (c) {
      c()
      this.pending.delete(p)
    }
  }

  /**
   * 请求标识
   * @param config
   */
  private getRequestKey(config: AxiosRequestConfig) {
    let res = this.baseUrl
    if (config.url) {
      res += config.url
    }
    if (config.method) {
      res += config.method.toLowerCase()
    }
    return res
  }
}

const requestHandler: RequestInterceptor = (config) => {
  config.headers['Token'] = userService.getToken()
  return config
}

export const httpService: AxiosInstance = new HttpService({
  baseURL: 'http://127.0.0.1:3000/api',
  timeout: 90000,
  requestInterceptors: [requestHandler],
}).getInstance()
