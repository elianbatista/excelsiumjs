export class ForbbidenError extends Error {
  constructor (message: string) {
    super(message)
    this.name = 'ForbbidenError'
  }
}
