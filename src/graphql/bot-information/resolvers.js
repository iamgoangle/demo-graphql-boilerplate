import { getData } from './models'

export default {
  Query: {
    bot_information: () => getData(),
  },
}
