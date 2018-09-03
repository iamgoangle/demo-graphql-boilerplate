import axios from 'axios'

// TODO: Circuit breaker...
// TODO: Logging...
export const getCouponAPI = async () => {
  const options = {
    method: 'get',
    url: process.env.PLUGIN_COUPON_HOST,
  }

  const { data } = await axios(options)

  return data
}

export default { getCouponAPI }
