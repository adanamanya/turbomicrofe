import fetcher from '../fetcher'


export const getUser = async () => {
  const fetchConfig = {
    url: `${process.env.NEXT_PUBLIC_BASE_URL_USER_SERVICE}/users`,
    method: 'GET',
  }

  const response = await fetcher(fetchConfig)
  return response
}
