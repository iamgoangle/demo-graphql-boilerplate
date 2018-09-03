import axios from 'axios'

// TODO: Circuit breaker...
// TODO: Logging...
export const getCommerceAPI = async () => {
  const options = {
    method: 'get',
    url: process.env.PLUGIN_COMMERCE_HOST,
  }

  const { data } = await axios(options)

  return data
}

export default { getCommerceAPI }
