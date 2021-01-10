export class InvalidParamError extends Error {
  constructor (paramName: string) {
    super(`InvalidParamError: ${paramName}`)
    this.name = 'InvalidParamError'
  }
}
