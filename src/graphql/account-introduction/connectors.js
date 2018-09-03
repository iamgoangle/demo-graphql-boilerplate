import axios from 'axios'

// TODO: Circuit breaker...
// TODO: Logging...
export const getAccountIntroductionAPI = async () => {
  const options = {
    method: 'get',
    url: process.env.PLUGIN_ACCOUNT_INTRODUCTION_HOST,
  }

  const { data } = await axios(options)
  return data
}

export default { getAccountIntroductionAPI }
