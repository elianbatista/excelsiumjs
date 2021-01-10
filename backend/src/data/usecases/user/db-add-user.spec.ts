import { User } from '../../../domain/entities/user'
import { UserModel } from '../../models/user-model'
import { Encrypter } from '../../protocols/cryptography/encrypter'
import { Hasher } from '../../protocols/cryptography/hasher'
import { AddUserRepository } from '../../repositories/user/add-user-repository'
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

const makeAddUserRepository = (): AddUserRepository => {
  class AddUserRepositoryStub implements AddUserRepository {
    async add (user: User): Promise<UserModel> {
      return new Promise(resolve => resolve(makeFakeUserModel()))
    }
  }
  return new AddUserRepositoryStub()
}

const makeHasher = (): Hasher => {
  class HasherStub implements Hasher {
    async hash (value: string): Promise<string> {
      return new Promise(resolve => resolve('hashed_password'))
    }
  }
  return new HasherStub()
}

const makeEncrypter = (): Encrypter => {
  class EncrypterStub implements Encrypter {
    async encrypt (value: string): Promise<string> {
      return new Promise(resolve => resolve('any_token'))
    }
  }
  return new EncrypterStub()
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

interface SutTypes {
  sut: DbAddUser
  findUserByEmailStub: FindUserByEmailRepository
  hasherStub: Hasher
  addUserRepositoryStub: AddUserRepository
  encrypterStub: Encrypter
}

const makeSut = (): SutTypes => {
  const findUserByEmailStub = makeFindUserByEmailRepository()
  const hasherStub = makeHasher()
  const addUserRepositoryStub = makeAddUserRepository()
  const encrypterStub = makeEncrypter()
  const sut = new DbAddUser(
    addUserRepositoryStub,
    findUserByEmailStub,
    hasherStub,
    encrypterStub
  )
  return {
    sut,
    findUserByEmailStub,
    hasherStub,
    addUserRepositoryStub,
    encrypterStub
  }
}

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

  test('Should throw if Hasher throws', async () => {
    const { sut, hasherStub } = makeSut()
    jest.spyOn(hasherStub, 'hash').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const promise = sut.add(makeFakeUser())
    await expect(promise).rejects.toThrow()
  })

  test('Should call AddUserRepository with correct values', async () => {
    const { sut, addUserRepositoryStub } = makeSut()
    const addSpy = jest.spyOn(addUserRepositoryStub, 'add')
    await sut.add(makeFakeUser())
    expect(addSpy).toHaveBeenCalledWith({
      name: 'valid_name',
      email: 'valid_email',
      password: 'hashed_password'
    })
  })

  test('Should throw if AddUserRepository throws', async () => {
    const { sut, addUserRepositoryStub } = makeSut()
    jest.spyOn(addUserRepositoryStub, 'add').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())))
    const promise = sut.add(makeFakeUser())
    await expect(promise).rejects.toThrow()
  })

  test('Should call encrypter with correct values', async () => {
    const { sut, encrypterStub } = makeSut()
    const encrypterSpy = jest.spyOn(encrypterStub, 'encrypt')
    await sut.add(makeFakeUser())
    const fakeUser = {
      id: 'any_id',
      name: 'any_name',
      email: 'any_email@email.com'
    }
    expect(encrypterSpy).toHaveBeenCalledWith(fakeUser)
  })
})
