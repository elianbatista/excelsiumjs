import { SignUpController } from './signup-controller'
import { HttpRequest, Validator, User, AddUser, UserModel } from './signup-protocols'
import { InvalidParamError, MissingParamError } from '../../errors/'
import { badRequest, created } from '../../helpers/http/http-helper'

const makeAddUser = (): AddUser => {
  class AddUserStub implements AddUser {
    async add (user: User): Promise<UserModel> {
      return new Promise(resolve => resolve(makeFakeUserModel()))
    }
  }
  return new AddUserStub()
}

const makeValidator = (): Validator => {
  class ValidatorStub implements Validator {
    validate (body: any): Error {
      return null
    }
  }
  return new ValidatorStub()
}
interface sutTypes {
  sut: SignUpController
  validatorStub: Validator
  addUserStub: AddUser
}

const makeSut = (): sutTypes => {
  const validatorStub = makeValidator()
  const addUserStub = makeAddUser()
  const sut = new SignUpController(
    addUserStub,
    validatorStub
  )
  return {
    sut,
    addUserStub,
    validatorStub
  }
}

const makeFakeUser = (): User => ({
  name: 'any_name',
  password: 'any_password',
  email: 'any_email@email.com'
})

const makeFakeUserModel = (): UserModel => ({
  id: 'any_id',
  accessToken: 'any_token',
  name: 'any_name',
  password: 'any_password',
  email: 'any_email@email.com'
})

const makeFakeRequest = (): HttpRequest => ({
  body: makeFakeUser()
})

describe('Sign Up', () => {
  test('Should return 400 if no email is provided', async () => {
    const { sut, validatorStub } = makeSut()
    jest.spyOn(validatorStub, 'validate')
      .mockReturnValueOnce(new MissingParamError('email'))
    const httpRequest: HttpRequest = {
      body: {
        name: 'any_name',
        password: 'any_password'
      }
    }
    const result = await sut.handle(httpRequest)
    expect(result).toEqual(badRequest(new MissingParamError('email')))
  })

  test('Should return 400 if no password is provided', async () => {
    const { sut, validatorStub } = makeSut()
    jest.spyOn(validatorStub, 'validate')
      .mockReturnValueOnce(new MissingParamError('password'))
    const httpRequest: HttpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email@email.com'
      }
    }
    const result = await sut.handle(httpRequest)
    expect(result).toEqual(badRequest(new MissingParamError('password')))
  })

  test('Should return 400 if no name is provided', async () => {
    const { sut, validatorStub } = makeSut()
    jest.spyOn(validatorStub, 'validate')
      .mockReturnValueOnce(new MissingParamError('name'))
    const httpRequest: HttpRequest = {
      body: {
        password: 'any_password',
        email: 'any_email@email.com'
      }
    }
    const result = await sut.handle(httpRequest)
    expect(result).toEqual(badRequest(new MissingParamError('name')))
  })

  test('Should return 400 if a invalid email is provided', async () => {
    const { sut, validatorStub } = makeSut()
    jest.spyOn(validatorStub, 'validate')
      .mockReturnValueOnce(new InvalidParamError('email'))
    const httpRequest: HttpRequest = {
      body: {
        name: 'any_name',
        email: 'invalid_email',
        password: 'any_password'
      }
    }
    const result = await sut.handle(httpRequest)
    expect(result).toEqual(badRequest(new InvalidParamError('email')))
  })

  test('Should return 201 if an user is created', async () => {
    const { sut, validatorStub } = makeSut()
    jest.spyOn(validatorStub, 'validate').mockReturnValueOnce(null)
    const result = await sut.handle(makeFakeRequest())
    expect(result).toEqual(created(makeFakeUserModel()))
  })

  test('Should return 500 if add user throws', async () => {
    const { sut, addUserStub } = makeSut()
    jest.spyOn(addUserStub, 'add').mockImplementationOnce(async () => {
      return new Promise((resolve, reject) => reject(new Error()))
    })
    const httResponse = await sut.handle(makeFakeRequest())
    expect(httResponse.statusCode).toBe(500)
  })

  test('Should call AddUser with correct values', async () => {
    const { sut, addUserStub } = makeSut()
    const addSpy = jest.spyOn(addUserStub, 'add')
    await sut.handle(makeFakeRequest())
    expect(addSpy).toHaveBeenCalledWith(
      {
        name: 'any_name',
        password: 'any_password',
        email: 'any_email@email.com'
      }
    )
  })
})
