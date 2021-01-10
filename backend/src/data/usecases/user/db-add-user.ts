import { User, AddUser, UserModel, Encrypter, Hasher, AddUserRepository, FindUserByEmailRepository } from './db-add-user-protocols'
import { ForbbidenError } from '../../errors/forbbiden-error'

export class DbAddUser implements AddUser {
  constructor (
    private readonly addUserRepository: AddUserRepository,
    private readonly findUserByEmailRepository: FindUserByEmailRepository,
    private readonly hasher: Hasher,
    private readonly encrypter: Encrypter
  ) {}

  async add (user: User): Promise<UserModel> {
    const userExists = await this.findUserByEmailRepository.find(user.email)
    if (userExists) {
      throw new ForbbidenError('Email already exists')
    }
    const hashedPassword = await this.hasher.hash(user.password)
    user.password = hashedPassword
    const userModel = await this.addUserRepository.add(user)
    const accesstoken = await this.encrypter.encrypt(
      {
        id: userModel.id,
        name: userModel.name,
        email: userModel.email
      }
    )
    userModel.accessToken = accesstoken
    // TODO update user to save the access token on the database
    delete userModel.password
    return userModel
  }
}
