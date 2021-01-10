import { User } from '../../../domain/entities/user'
import { AddUser } from '../../../domain/usecases/add-user'
import { ForbbidenError } from '../../erros/forbbiden-error'
import { UserModel } from '../../models/user-model'
import { Hasher } from '../../protocols/cryptography/hasher'
import { FindUserByEmailRepository } from '../../repositories/user/find-user-by-email-repository'

export class DbAddUser implements AddUser {
  constructor (
    private readonly findUserByEmail: FindUserByEmailRepository,
    private readonly hasher: Hasher
  ) {}

  async add (user: User): Promise<UserModel> {
    const userExists = await this.findUserByEmail.find(user.email)
    if (userExists) {
      throw new ForbbidenError('Email already exists')
    }

    await this.hasher.hash(user.password)

    return null
  }
}
