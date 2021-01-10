export interface Validator {
  validate: (body: any) => Error
}
