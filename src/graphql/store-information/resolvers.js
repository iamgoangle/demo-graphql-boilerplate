import { getData } from './models'

export default {
  Query: {
    store_information: () => getData(),
  },
}
