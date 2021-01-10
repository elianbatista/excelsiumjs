import { InvalidParamError } from '../../errors/invalid-param-error'
import { MissingParamError } from '../../errors/missing-param-error'
import { badRequest } from '../../helpers/http/http-helper'
import { EmailValidator } from '../../protocols/email-validator'
import { HttpRequest } from '../../protocols/http'
import { SignUpController } from './signup-controller'

const makeEmailValidator = (): EmailValidator => {
  class EmailValidatorStub implements EmailValidator {
    is_valid (email: string): boolean {
      return true
    }
  }
  return new EmailValidatorStub()
}
interface sutTypes {
  sut: SignUpController
  email_validator_stub: EmailValidator
}

const makeSut = (): sutTypes => {
  const email_validator_stub = makeEmailValidator()
  const sut = new SignUpController(email_validator_stub)
  return {
    sut,
    email_validator_stub
  }
}

// const makeFakeAccount = (): any => ({
//   name: 'any_name',
//   password: 'any_password',
//   email: 'any_email@email.com'
// })

// const makeFakeHttpRequest = (): HttpRequest => ({
//   body: makeFakeAccount()
// })

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
    const { sut, email_validator_stub } = makeSut()
    jest.spyOn(email_validator_stub, 'is_valid')
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
})
