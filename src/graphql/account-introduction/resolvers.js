import { getData } from './models'

export default {
  Query: {
    account_introduction: () => getData(),
  },
}
