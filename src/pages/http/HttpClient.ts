/**
 * HttpClient
 * @author guobin201314@gmail.com on 2019-04-15
 */

export interface IParams {
  [key: string]: string
}

export interface IBody {
  [key: string]: string | number | object
}

export interface IResType {
  code: ResCode;
  data: any[];
  msg: string;
}

export enum ResCode {
  OK = 0,
  ERROR = -1,
  NOT_ALLOW = 2,
  NOT_LOGIN = 3,
}

class HttpClient {

  private _ajax: XMLHttpRequest;
  private readonly isFetch: boolean;

  constructor() {
    this.isFetch = !!window.fetch;
  }

  /**
   * get
   * @param url
   * @param params
   */
  get(url: string, params?: IParams): Promise<any> {
    let param = '';
    if (params) {
      param = this.buildUrlParams(params);
    }
    if (!this.isFetch) {
      return fetch(url + param).then(res => {
        return res.json();
      })
    } else {
      return new Promise((resolve, reject) => {
        this._ajax = new XMLHttpRequest();
        this._ajax.open('GET', url + param);
        this._ajax.onreadystatechange = () => {
          if (this._ajax.readyState === 4) {
            if (this._ajax.status >= 200) {
              resolve(JSON.parse(this._ajax.responseText));
            } else {
              reject(this._ajax.response);
            }
          }
        };
        this._ajax.send();
      })
    }
  }

  /**
   * post
   * @param url
   * @param body
   */
  post(url: string, body?: IBody): Promise<any> {
    if (body) {
      const form: FormData = this.buildFormData(body);
      if (this.isFetch) {
        return fetch(url, {method: 'POST', body: form}).then((res: any) => res.json());
      } else {
        return new Promise((resolve, reject) => {
          this._ajax = new XMLHttpRequest();
          this._ajax.open('POST', url, true);
          this._ajax.onreadystatechange = () => {
            if (this._ajax.readyState === 4) {
              if (this._ajax.status >= 200) {
                resolve(JSON.parse(this._ajax.responseText));
              } else {
                reject(this._ajax.response);
              }
            }
          };
          this._ajax.send(form);
        })
      }
    } else {
      if (this.isFetch) {
        return fetch(url, {method: 'POST'}).then((res: any) => res.json());
      } else {
        return new Promise((resolve, reject) => {
          this._ajax = new XMLHttpRequest();
          this._ajax.open('POST', url, true);
          this._ajax.onreadystatechange = () => {
            if (this._ajax.readyState === 4) {
              if (this._ajax.status >= 200) {
                resolve(JSON.parse(this._ajax.responseText));
              } else {
                reject(this._ajax.response);
              }
            }
          };
          this._ajax.send();
        })
      }
    }
  }

  /**
   * put
   * @param url
   * @param body
   */
  put(url: string, body: IBody): Promise<any> {
    const form: FormData = this.buildFormData(body);
    if (this.isFetch) {
      return fetch(url, {method: 'PUT', body: form}).then((res: any) => res.json());
    } else {
      return new Promise((resolve, reject) => {
        this._ajax = new XMLHttpRequest();
        this._ajax.open('PUT', url, true);
        this._ajax.onreadystatechange = () => {
          if (this._ajax.readyState === 4) {
            if (this._ajax.status >= 200) {
              resolve(JSON.parse(this._ajax.responseText));
            } else {
              reject(this._ajax.response);
            }
          }
        };
        this._ajax.send(form);
      })
    }
  }

  /**
   * delete
   * @param url
   * @param body
   */
  delete(url: string, body: IBody): Promise<any> {
    const form: FormData = this.buildFormData(body);
    if (this.isFetch) {
      return fetch(url, {method: 'DELETE', body: form}).then((res: any) => res.json());
    } else {
      return new Promise((resolve, reject) => {
        this._ajax = new XMLHttpRequest();
        this._ajax.open('DELETE', url, true);
        this._ajax.onreadystatechange = () => {
          if (this._ajax.readyState === 4) {
            if (this._ajax.status >= 200) {
              resolve(JSON.parse(this._ajax.responseText));
            } else {
              reject(this._ajax.response);
            }
          }
        };
        this._ajax.send(form);
      })
    }
  }
  private buildFormData(b: IBody): FormData {
    const form = new FormData();
    for (const key in b) {
      if (b.hasOwnProperty(key)) {
        switch (typeof b[key]) {
          case "number":
            form.append(key, b[key] + '');
            break;
          case "string":
            form.append(key, b[key] + '');
            break;
          case "object":
            form.append(key, JSON.stringify(b[key]));
            break;
        }
      }
    }
    return form;
  }
  private buildUrlParams(p: IParams): string {
    let res = '?';
    for (const key in p) {
      if (p.hasOwnProperty(key)) {
        res += `${key}=${p[key]}`;
      }
    }
    return res.length === 1 ? '' : res.substring(0, res.length)
  }
}

export const Http = new HttpClient();
