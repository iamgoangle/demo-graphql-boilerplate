import { getData } from './models'

export default {
  Query: {
    history: () => getData(),
  },
}
