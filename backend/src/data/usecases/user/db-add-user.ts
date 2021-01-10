import { User } from '../../../domain/entities/user'
import { AddUser } from '../../../domain/usecases/add-user'
import { UserModel } from '../../models/user-model'
import { FindUserByEmailRepository } from '../../repositories/user/find-user-by-email-repository'

export class DbAddUser implements AddUser {
  constructor (
    private readonly findUserByEmail: FindUserByEmailRepository
  ) {}

  async add (user: User): Promise<UserModel> {
    const userExists = await this.findUserByEmail.find(user.email)
    if (userExists) {
      throw new Error()
    }
    return null
  }
}
