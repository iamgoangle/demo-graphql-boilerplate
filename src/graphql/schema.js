import path from 'path'
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas'

const typesArray = fileLoader(path.join(__dirname, '**/schema.gql'))
const resolversArray = fileLoader(path.join(__dirname, '**/resolvers.js'))

export const typeDefs = mergeTypes(typesArray)
export const resolvers = mergeResolvers(resolversArray)
