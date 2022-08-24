"use strict";
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const express = require('express');
const app = express();
app.use(cors());
(async () => {
    const server = new ApolloServer({
        modules: [
            require('../schemas/course.js'),
        ],
    });
    await server.start();
    server.applyMiddleware({ app });
    app.get('/', (req, res) => res.send('Welcome!'));
    app.listen(4000, () => console.log('Running on localhost:4000'));
})();
