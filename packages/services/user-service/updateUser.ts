import { IuserId, IuserParams } from './interfaceUser'
import fetcher from '../fetcher'

export const updateUser = async (userParams: IuserParams, userId: IuserId) => {
  const fetchConfig = {
    url: `${process.env.NEXT_PUBLIC_BASE_URL_USER_SERVICE}/users/${userId}`,
    method: 'PUT',
    body: userParams,
  }

  const response = await fetcher(fetchConfig)
  return response
}
