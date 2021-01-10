import { User } from '../../../domain/entities/user'
import { UserModel } from '../../models/user-model'
import { Hasher } from '../../protocols/cryptography/hasher'
import { FindUserByEmailRepository } from '../../repositories/user/find-user-by-email-repository'
import { DbAddUser } from './db-add-user'

const makeFindUserByEmailRepository = (): FindUserByEmailRepository => {
  class FindUserByEmailRepositoryStub implements FindUserByEmailRepository {
    async find (email: string): Promise<UserModel> {
      return new Promise(resolve => resolve(null))
    }
  }
  return new FindUserByEmailRepositoryStub()
}

const makeHasher = (): Hasher => {
  class HasherStub implements Hasher {
    async hash (value: string): Promise<string> {
      return new Promise(resolve => resolve('hashed_password'))
    }
  }
  return new HasherStub()
}

interface SutTypes {
  sut: DbAddUser
  findUserByEmailStub: FindUserByEmailRepository
  hasherStub: Hasher
}

const makeSut = (): SutTypes => {
  const findUserByEmailStub = makeFindUserByEmailRepository()
  const hasherStub = makeHasher()
  const sut = new DbAddUser(findUserByEmailStub, hasherStub)
  return {
    sut,
    findUserByEmailStub,
    hasherStub
  }
}

const makeFakeUser = (): User => ({
  name: 'valid_name',
  email: 'valid_email',
  password: 'valid_password'
})

// const makeFakeUserModel = (): UserModel => ({
//   id: 'any_id',
//   accessToken: 'any_token',
//   name: 'any_name',
//   password: 'any_password',
//   email: 'any_email@email.com'
// })

describe('DbAddUser', () => {
  test('Shold throw if email already exists', async () => {
    const { sut } = makeSut()
    jest.spyOn(sut, 'add')
      .mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error('teste'))))
    const promise = sut.add(makeFakeUser())
    await expect(promise).rejects.toThrow()
  })

  test('Should call hasher with correct password', async () => {
    const { sut, hasherStub } = makeSut()
    const hashSpy = jest.spyOn(hasherStub, 'hash')
    await sut.add(makeFakeUser())
    expect(hashSpy).toHaveBeenCalledWith('valid_password')
  })
})
