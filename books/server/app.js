const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
  'mongodb+srv://root:1234@cluster0-rmy7e.mongodb.net/test?retryWrites=true'
);
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema, // Graphql Schema (not mongoDB)
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log('listening port 4000...');
});
