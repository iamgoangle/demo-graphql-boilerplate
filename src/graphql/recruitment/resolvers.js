import { getData } from './models'

export default {
  Query: {
    recruitment: () => getData(),
  },
}
