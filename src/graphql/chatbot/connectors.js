import axios from 'axios'

// TODO: Circuit breaker...
// TODO: Logging...
export const getChatbotAPI = async () => {
  const options = {
    method: 'get',
    url: process.env.PLUGIN_CHATBOT_HOST,
  }

  const { data } = await axios(options)

  return data
}

export default { getChatbotAPI }
