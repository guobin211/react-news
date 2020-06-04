import { UserVM } from '@/models'
import { httpService } from './http-service'
import { LocalEnum, localService } from './local-service'

export abstract class BaseUserService<T> {
  abstract doLogin: (user: T) => Promise<T>
  abstract doLogout: (user: T) => Promise<boolean>
  abstract updateToken: (user: T) => Promise<T>
  abstract getUserInfo: () => Promise<T>
}

export class UserService implements BaseUserService<UserVM> {
  private _token = ''
  set token(token: string) {
    this._token = token
  }

  get token() {
    return this._token
  }

  constructor() {
    const user: UserVM | undefined = localService.getData(LocalEnum.UserInfo)
    if (user) {
      this.token = user.token
    }
  }

  doLogin(user: UserVM): Promise<UserVM> {
    return httpService
      .post('/login/web', user)
      .then((res) => res.data)
      .catch()
  }

  doLogout(user: UserVM): Promise<boolean> {
    return httpService
      .post('/logout/web', user)
      .then((res) => res.data)
      .catch()
  }

  getUserInfo(): Promise<UserVM> {
    return httpService
      .get('/user/info')
      .then((res) => res.data)
      .catch()
  }

  updateToken(user: UserVM): Promise<UserVM> {
    return httpService
      .post('/user/token', user)
      .then((res) => res.data)
      .catch()
  }
}

export const userService = new UserService()
