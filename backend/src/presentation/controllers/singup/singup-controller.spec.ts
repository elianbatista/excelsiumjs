import { User } from '../../../domain/entities/user'
import { AddUser, UserModel } from '../../../domain/usecases/add-user'
import { InvalidParamError } from '../../errors/invalid-param-error'
import { MissingParamError } from '../../errors/missing-param-error'
import { badRequest } from '../../helpers/http/http-helper'
import { EmailValidator } from '../../protocols/email-validator'
import { HttpRequest } from '../../protocols/http'
import { SignUpController } from './signup-controller'

const makeEmailValidator = (): EmailValidator => {
  class EmailValidatorStub implements EmailValidator {
    isValid (email: string): boolean {
      return true
    }
  }
  return new EmailValidatorStub()
}

const makeAddUser = (): AddUser => {
  class AddUserStub implements AddUser {
    async add (user: User): Promise<UserModel> {
      return new Promise(resolve => resolve(makeFakeUserModel()))
    }
  }
  return new AddUserStub()
}
interface sutTypes {
  sut: SignUpController
  emailValidatorStub: EmailValidator
}

const makeSut = (): sutTypes => {
  const emailValidatorStub = makeEmailValidator()
  const sut = new SignUpController(
    emailValidatorStub,
    makeAddUser()
  )
  return {
    sut,
    emailValidatorStub
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

const makeFakeHttpRequest = (): HttpRequest => ({
  body: makeFakeUser()
})

describe('Sign Up', () => {
  test('Should return 400 if no email is provided', async () => {
    const { sut } = makeSut()
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
    const { sut } = makeSut()
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
    const { sut } = makeSut()
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
    const { sut, emailValidatorStub } = makeSut()
    jest.spyOn(emailValidatorStub, 'isValid')
      .mockReturnValueOnce(false)
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
    const { sut } = makeSut()
    const result = await sut.handle(makeFakeHttpRequest())
    expect(result.statusCode).toBe(201)
  })
})
