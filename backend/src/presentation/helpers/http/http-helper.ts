import { HttpResponse } from '../../protocols/http'

export const badRequest = (error: Error): HttpResponse => (
  {
    statusCode: 400,
    body: error
  }
)

export const created = (body: any): HttpResponse => (
  {
    statusCode: 201,
    body
  }
)
