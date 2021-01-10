import { UserModel } from '../../models/user-model'

export interface FindUserByEmailRepository {
  find: (email: string) => Promise<UserModel>
}
