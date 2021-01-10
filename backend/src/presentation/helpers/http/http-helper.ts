import { HttpResponse } from '../../protocols/http'

export const created = (body: any): HttpResponse => (
  {
    statusCode: 201,
    body
  }
)

export const badRequest = (error: Error): HttpResponse => (
  {
    statusCode: 400,
    body: {
      error: error.message
    }
  }
)

export const forbbiden = (error: Error): HttpResponse => (
  {
    statusCode: 403,
    body: {
      error: error.message
    }
  }
)

export const serverError = (error: Error): HttpResponse => (
  {
    statusCode: 500,
    body: {
      error: error.message
    }
  }
)
