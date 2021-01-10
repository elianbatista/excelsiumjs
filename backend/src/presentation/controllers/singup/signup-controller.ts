import { HttpRequest, HttpResponse, AddUser, Validator, Controller } from './signup-protocols'
import { badRequest, created } from '../../helpers/http/http-helper'

export class SignUpController implements Controller {
  constructor (
    private readonly addUser: AddUser,
    private readonly validator: Validator
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const user = httpRequest.body
    const error = this.validator.validate(user)
    if (error) {
      return badRequest(error)
    }
    const userModel = await this.addUser.add(user)
    return created(userModel)
  }
}
