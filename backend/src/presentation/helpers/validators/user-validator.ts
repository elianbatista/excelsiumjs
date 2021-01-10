import { InvalidParamError } from '../../errors/invalid-param-error'
import { MissingParamError } from '../../errors/missing-param-error'
import { EmailValidator } from '../../protocols/email-validator'
import { Validator } from '../../protocols/validator'

export class UserValidator implements Validator {
  constructor (
    private readonly emailValidator: EmailValidator
  ) {}

  validate (body: any): Error {
    const { email, password, name } = body

    if (!email) {
      return new MissingParamError('email')
    }

    if (!password) {
      return new MissingParamError('password')
    }

    if (!name) {
      return new MissingParamError('name')
    }

    if (!this.emailValidator.isValid(email)) {
      return new InvalidParamError('email')
    }

    return null
  }
}
