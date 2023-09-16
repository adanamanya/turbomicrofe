/**
 *
 * @param url -> request url string
 * @param method -> 'POST','GET', 'PUT', or 'DELETE'
 * @param body -> body data request (only mandatory for method POST and PUT)
 *
 **/

interface IFetcher {
  url: string
  method: string
  body?: any
}

const fetcher = (fetchConfig: IFetcher) => {
  const { url, method, body } = fetchConfig

  // set req header
  const headers = {
    'Content-Type': 'application/json',
  }

  // set req options and body
  const options =
    method === 'POST' || 'PUT'
      ? { method, headers, ...{ body: JSON.stringify(body) } }
      : {
          method,
          headers,
        }

  return fetch(url, options)
    .then((resp) => {
      if (!resp.ok) {
        // throw error to catch block
        return Promise.reject(resp)
      }
      return resp.json()
    })
    .then((data) => {
      return data
    })
    .catch((e) => {
      // return error response
      return e.json().then((resp: any) => {
        return Promise.reject(resp)
      })
    })
}

export default fetcher
