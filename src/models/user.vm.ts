import { BaseVM } from './base.vm'

export interface UserVM extends BaseVM {
  username: string
  password: string
}

export function getUser(): UserVM {
  const user = {} as UserVM
  user.id = ''
  user.createTime = ''
  user.username = ''
  user.password = ''
  return user
}
