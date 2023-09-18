import fetcher from '../packages/services/fetcher' // Update the import path as per your project structure

describe('fetcher', () => {
  it('should make a GET request without body', async () => {
    const fetchConfig = {
      url: 'https://dummyjson.com/users',
      method: 'GET',
    }

    const response = await fetcher(fetchConfig)

    expect(response).toEqual(expect.any(Object)) // Modify this based on your expected response structure
  })

  it('should make a POST request with a body', async () => {
    const fetchConfig = {
      url: 'https://dummyjson.com/users/1',
      method: 'POST',
      body: { key: 'value' },
    }

    const response = await fetcher(fetchConfig)

    expect(response).toEqual(expect.any(Object)) // Modify this based on your expected response structure
  })

  it('should make a PUT request with a body', async () => {
    const fetchConfig = {
      url: 'https://dummyjson.com/users/1',
      method: 'PUT',
      body: { key: 'value' },
    }

    const response = await fetcher(fetchConfig)

    expect(response).toEqual(expect.any(Object)) // Modify this based on your expected response structure
  })

  it('should handle failed requests and return an error response', async () => {
    // Mock a failed fetch response
    global.fetch = jest.fn().mockRejectedValue({ status: 404, json: () => Promise.resolve({ error: 'Not Found' }) })

    const fetchConfig = {
      url: 'https://dummyjson.com/users/1',
      method: 'GET',
    }

    try {
      await fetcher(fetchConfig)
    } catch (error) {
      expect(error).toEqual({ error: 'Not Found' }) // Modify this based on your expected error response
    }
  })

  // You can add more test cases as needed
})
