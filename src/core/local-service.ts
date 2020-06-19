export enum LocalEnum {
  AppState = "AppState",
  UserInfo = "UserInfo"
}

export class LocalService {
  getData<T>(key: LocalEnum): T | undefined {
    const res = localStorage.getItem(key)
    if (res) {
      return JSON.parse(res) as T
    }
  }
  setData(key: LocalEnum, data: any) {
    return localStorage.setItem(key, JSON.stringify(data))
  }
  clear() {
    localStorage.clear()
  }
  setDefault() {
    // todo 设置默认数据
  }
}

export const localService = new LocalService()
