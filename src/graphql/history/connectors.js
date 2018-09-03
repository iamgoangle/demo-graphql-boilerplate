import axios from 'axios'

// TODO: Circuit breaker...
// TODO: Logging...
export const getHistoryAPI = async () => {
  const options = {
    method: 'get',
    url: process.env.PLUGIN_HISTORY_HOST,
  }

  const { data } = await axios(options)

  return data
}

export default { getHistoryAPI }
