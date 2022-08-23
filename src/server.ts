const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;

const { schema } = require('./models.js');
const { root } = require('./controllers.js');

var app = express();
app.use('/graphql', expressGraphQL({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(4000, () => console.log('Running on localhost:4000/graphql'));
