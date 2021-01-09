import { MissingParamError } from '../../errors/missing-param-error'
import { badRequest } from '../../helpers/http-helper'
import { Controller } from '../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../protocols/http'

export class SignUpController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const { email } = httpRequest.body
    if (!email) {
      return new Promise(resolve => resolve(badRequest(new MissingParamError('email'))))
    }
  }
}
