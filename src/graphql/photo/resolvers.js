import { getData } from './models'

export default {
  Query: {
    photo: () => getData(),
  },
}
