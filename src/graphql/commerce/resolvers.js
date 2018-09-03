import { getData } from './models'

export default {
  Query: {
    commerce: () => getData(),
  },
}
