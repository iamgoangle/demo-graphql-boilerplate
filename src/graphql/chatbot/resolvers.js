import { getData } from './models'

export default {
  Query: {
    chatbot: () => getData(),
  },
}
