import { gql } from 'apollo-server'

const typeDefs = gql`
  scalar Date
  type Query {
    _: Boolean
    test: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`

export default [
  typeDefs
]