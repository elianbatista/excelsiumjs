import { badRequest, created } from '../../helpers/http/http-helper'
import { Controller } from '../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../protocols/http'
import { AddUser } from '../../../domain/usecases/add-user'
import { Validator } from '../../protocols/validator'

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
