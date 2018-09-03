import axios from 'axios'

// TODO: Circuit breaker...
// TODO: Logging...
export const getStoreInformationAPI = async () => {
  const options = {
    method: 'get',
    url: process.env.PLUGIN_STORE_INFORMATION_HOST,
  }

  const { data } = await axios(options)

  return data
}

export default { getStoreInformationAPI }
