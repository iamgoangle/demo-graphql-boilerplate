import axios from 'axios'

// TODO: Circuit breaker...
// TODO: Logging...
export const getBotInformationAPI = async () => {
  const options = {
    method: 'get',
    url: process.env.PLUGIN_BOT_INFORMATION_HOST,
    headers: {
      'Cache-Control': 'no-cache',
      'X-BOT-ID': 'u69cbbcf80f22307f4329ffbb1856389d',
      'X-MID': '1076202',
    },
  }

  const { data } = await axios(options)

  return data
}

export default { getBotInformationAPI }
