import { User } from '../entities/user'

export interface UserModel {
  id: string
  accessToken: string
  name: string
  email: string
  password: string
}

export interface AddUser {
  add: (user: User) => Promise<UserModel>
}
