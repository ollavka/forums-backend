import { ApolloServer } from 'apollo-server-express';
import fs from 'fs';
import path from 'path';
import { Query, Mutation } from './resolvers';

export const createServer = () => {
  const typeDefs = fs.readFileSync(
    path.join(__dirname, 'schema.graphql'),
    'utf8'
  );

  const resolvers = {
    Query,
    Mutation,
  };

  return new ApolloServer({
    typeDefs,
    resolvers,
  })
};
