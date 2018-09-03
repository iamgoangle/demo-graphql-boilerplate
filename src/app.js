import {} from 'dotenv/config'
import { NAME, PORT } from '@shared/config/app'
import routes from '@app/routes'
import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import compression from 'compression'
import { ApolloServer } from 'apollo-server-express'
import serviceName from '@shared/middlewares/logHandler/serviceName'
import logHandler from '@shared/middlewares/logHandler'
import { typeDefs, resolvers } from './graphql/schema'

const logger = morgan(logHandler)

const app = express()
app.set('trust proxy', ip => ip === '127.0.0.1')

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.applyMiddleware({ app })

app.use(helmet())
app.use(compression())
app.use(serviceName(NAME))
app.use(logger)

app.use('/api', routes)

app.listen({ port: PORT }, () => console.log(`🚀 Server ready at ${PORT}`)) // eslint-disable-line no-console
