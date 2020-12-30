export default {
  development: {
    mongoUrl: 'mongodb://localhost:27017/',
    serverPort: 9000
  }
}[process.env.NODE_ENV]