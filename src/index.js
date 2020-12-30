import { ApolloServer } from 'apollo-server'
import chalk from 'chalk'
import config from './config'
import logger from './helpers/logger'
import resolvers from './resolvers'
import typeDefs from './typeDefs'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: {
    credentials: true,
    origin: [
      'http://localhost:3000'
    ]
  },
  playground: process.env.NODE_ENV === 'development',
  debug: process.env.NODE_ENV === 'development',
  introspection: process.env.NODE_ENV === 'development'
  // context: ({ req }) => ({
  //   auth: req.headers.authorization
  // })
})

// mongoose
//   .connect(config.mongoUrl, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
//   })
//   .then(() => {
//     logger.info(chalk.blueBright('Connected to database.'))
//   })

server.listen(config.serverPort).then(({ port }) => {
  logger.info(chalk.blueBright(`🚀 Running on port ${port}.`))
})