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
}

export interface IuserId {
    id: number
}