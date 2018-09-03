import { getData } from './models'

export default {
  Query: {
    item: () => getData(),
  },
}
