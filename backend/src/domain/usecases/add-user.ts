import { User } from '../entities/user'
import { UserModel } from '../../data/models/user-model'

export interface AddUser {
  add: (user: User) => Promise<UserModel>
}
