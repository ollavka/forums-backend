import express from 'express';
import { createServer } from './createServer';

const PORT = process.env.PORT || 4000;

const server = createServer();

async function startServer() {
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  app.listen({ port: PORT }, () => {
    console.log(
      `Server ready at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
}

startServer();
