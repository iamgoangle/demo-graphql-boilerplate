import axios from 'axios'

// TODO: Circuit breaker...
// TODO: Logging...
export const getRecruitmentAPI = async () => {
  const options = {
    method: 'get',
    url: process.env.PLUGIN_RECRUITMENT_HOST,
  }

  const { data } = await axios(options)

  return data
}

export default { getRecruitmentAPI }
