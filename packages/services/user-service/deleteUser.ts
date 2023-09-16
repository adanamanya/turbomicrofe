import { IuserId } from './interfaceUser'
import fetcher from '../fetcher'

export const deleteUser = async (userId: IuserId) => {
  const fetchConfig = {
    url: `${process.env.NEXT_PUBLIC_BASE_URL_USER_SERVICE}/users/${userId}`,
    method: 'DELETE',
  }

  const response = await fetcher(fetchConfig)
  return response
}
