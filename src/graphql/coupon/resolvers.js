import { getData } from './models'

export default {
  Query: {
    coupon: () => getData(),
  },
}
