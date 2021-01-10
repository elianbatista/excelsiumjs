import { HttpRequest, HttpResponse, AddUser, Validator, Controller } from './signup-protocols'
import { badRequest, created, forbbiden, serverError } from '../../helpers/http/http-helper'

export class SignUpController implements Controller {
  constructor (
    private readonly addUser: AddUser,
    private readonly validator: Validator
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const user = httpRequest.body
      const error = this.validator.validate(user)
      if (error) {
        return badRequest(error)
      }
      const userModel = await this.addUser.add(user)
      return created(userModel)
    } catch (error) {
      if (error.name === 'ForbbidenError') {
        return forbbiden(error)
      }
      return serverError(error)
    }
  }
}
