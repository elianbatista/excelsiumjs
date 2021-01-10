import { User } from '../../../domain/entities/user'
import { UserModel } from '../../models/user-model'
import { FindUserByEmailRepository } from '../../repositories/user/find-user-by-email-repository'
import { DbAddUser } from './db-add-user'

const makeFindUserByEmailRepository = (): FindUserByEmailRepository => {
  class FindUserByEmailRepositoryStub implements FindUserByEmailRepository {
    async find (email: string): Promise<UserModel> {
      return new Promise(resolve => resolve(makeFakeUserModel()))
    }
  }
  return new FindUserByEmailRepositoryStub()
}

interface SutTypes {
  sut: DbAddUser
  findUserByEmailStub: FindUserByEmailRepository
}

const makeSut = (): SutTypes => {
  const findUserByEmailStub = makeFindUserByEmailRepository()
  const sut = new DbAddUser(findUserByEmailStub)
  return {
    sut,
    findUserByEmailStub
  }
}

const makeFakeUser = (): User => ({
  name: 'valid_name',
  email: 'valid_email',
  password: 'valid_password'
})

const makeFakeUserModel = (): UserModel => ({
  id: 'any_id',
  accessToken: 'any_token',
  name: 'any_name',
  password: 'any_password',
  email: 'any_email@email.com'
})

describe('DbAddUser', () => {
  test('Shold throw if email already exists', async () => {
    const { sut } = makeSut()
    jest.spyOn(sut, 'add')
      .mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error('teste'))))
    const promise = sut.add(makeFakeUser())
    await expect(promise).rejects.toThrow()
  })
})
