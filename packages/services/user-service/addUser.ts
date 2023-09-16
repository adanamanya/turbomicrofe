import fetcher from '../fetcher'

import { IuserParams } from './interfaceUser'

export const addUser = async (userParams: IuserParams) => {
  const fetchConfig = {
    url: `${process.env.NEXT_PUBLIC_BASE_URL_USER_SERVICE}/users/add`,
    method: 'POST',
    body: userParams,
  }

  const response = await fetcher(fetchConfig)
  return response
}
