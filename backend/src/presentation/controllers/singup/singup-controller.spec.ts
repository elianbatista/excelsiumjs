import { MissingParamError } from '../../errors/missing-param-error'
import { badRequest } from '../../helpers/http/http-helper'
import { HttpRequest } from '../../protocols/http'
import { SignUpController } from './signup-controller'

const makeSut = (): SignUpController => {
  return new SignUpController()
}

describe('Sign Up', () => {
  test('Should return 400 if no email is provided', async () => {
    const sut = makeSut()
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
    const sut = makeSut()
    const httpRequest: HttpRequest = {
      body: {
        name: 'any_name',
        email: 'any_email'
      }
    }
    const result = await sut.handle(httpRequest)
    expect(result).toEqual(badRequest(new MissingParamError('password')))
  })

  test('Should return 400 if no name is provided', async () => {
    const sut = makeSut()
    const httpRequest: HttpRequest = {
      body: {
        password: 'any_password',
        email: 'any_email'
      }
    }
    const result = await sut.handle(httpRequest)
    expect(result).toEqual(badRequest(new MissingParamError('name')))
  })
})
