import { IuserParams } from './interfaceUser'
import fetcher from '../fetcher'

export const addUser = async (userParams: IuserParams) => {
  const fetchConfig = {
    url: `${process.env.NEXT_PUBLIC_BASE_URL_USER_SERVICE}/users/add`,
    method: 'POST',
    body: userParams,
  }

  const response = await fetcher(fetchConfig)
  return response
}
