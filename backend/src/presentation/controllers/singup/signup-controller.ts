import { InvalidParamError } from '../../errors/invalid-param-error'
import { MissingParamError } from '../../errors/missing-param-error'
import { badRequest, created } from '../../helpers/http/http-helper'
import { Controller } from '../../protocols/controller'
import { EmailValidator } from '../../protocols/email-validator'
import { HttpRequest, HttpResponse } from '../../protocols/http'
import { AddUser } from '../../../domain/usecases/add-user'

export class SignUpController implements Controller {
  constructor (
    private readonly emailValidator: EmailValidator,
    private readonly addUser: AddUser
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const { email, password, name } = httpRequest.body

    if (!email) {
      return new Promise(resolve => resolve(badRequest(new MissingParamError('email'))))
    }

    if (!password) {
      return new Promise(resolve => resolve(badRequest(new MissingParamError('password'))))
    }

    if (!name) {
      return new Promise(resolve => resolve(badRequest(new MissingParamError('name'))))
    }

    if (!this.emailValidator.isValid(email)) {
      return new Promise(resolve => resolve(badRequest(new InvalidParamError('email'))))
    }

    const user = await this.addUser.add({ email, name, password })

    return created(user)
  }
}
