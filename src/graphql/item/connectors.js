import axios from 'axios'

// TODO: Circuit breaker...
// TODO: Logging...
export const getItemAPI = async () => {
  const options = {
    method: 'get',
    url: process.env.PLUGIN_ITEM_HOST,
  }

  const { data } = await axios(options)

  return data
}

export default { getItemAPI }
