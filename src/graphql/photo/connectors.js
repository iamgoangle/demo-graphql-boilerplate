import axios from 'axios'

// TODO: Circuit breaker...
// TODO: Logging...
export const getPhotoAPI = async () => {
  const options = {
    method: 'get',
    url: process.env.PLUGIN_PHOTO_HOST,
  }

  const { data } = await axios(options)

  return data
}

export default { getPhotoAPI }
