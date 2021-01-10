export interface EmailValidator {
  is_valid: (email: string) => boolean
}
