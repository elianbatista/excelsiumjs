import { User } from '../../../domain/entities/user'
import { AddUser } from '../../../domain/usecases/add-user'
import { ForbbidenError } from '../../erros/forbbiden-error'
import { UserModel } from '../../models/user-model'
import { Hasher } from '../../protocols/cryptography/hasher'
import { AddUserRepository } from '../../repositories/user/add-user-repository'
import { FindUserByEmailRepository } from '../../repositories/user/find-user-by-email-repository'

export class DbAddUser implements AddUser {
  constructor (
    private readonly addUserRepository: AddUserRepository,
    private readonly findUserByEmailRepository: FindUserByEmailRepository,
    private readonly hasher: Hasher
  ) {}

  async add (user: User): Promise<UserModel> {
    const userExists = await this.findUserByEmailRepository.find(user.email)
    if (userExists) {
      throw new ForbbidenError('Email already exists')
    }
    const hashedPassword = await this.hasher.hash(user.password)
    user.password = hashedPassword
    const userModel = await this.addUserRepository.add(user)
    return userModel
  }
}
