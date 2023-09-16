/**
 *
 * Call this interface for each services
 * please make sure it match with required payload / data type
 *
 *
 */

export interface IuserParams {
  firstName: string
  lastName: string
  age: number
  id: number
  maidenName: string
  gender: string
  email: string
  phone: string
  username: string
  password: string
  birthDate: string
  image: string
  eyeColor: string
}

export interface IuserId {
  id: number
}
