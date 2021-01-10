import { User } from '../../../domain/entities/user'
import { UserModel } from '../../models/user-model'

export interface AddUserRepository {
  add: (user: User) => Promise<UserModel>
}
