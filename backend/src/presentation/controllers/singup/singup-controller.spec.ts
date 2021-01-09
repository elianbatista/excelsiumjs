import { HttpRequest } from '../../protocols/http'
import { SignUpController } from './signup-controller'

describe('Sign Up', () => {
  test('Should return 400 if no email is provided', async () => {
    const sut = new SignUpController()
    const httpRequest: HttpRequest = {
      body: {
        name: 'any_name',
        password: 'any_password'
      }
    }
    const result = await sut.handle(httpRequest)
    expect(result.statusCode).toBe(400)
  })
})
