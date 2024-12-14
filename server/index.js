const express = require("express");
require("dotenv").config();
const {graphqlHTTP} = require('express-graphql')

const connectDB = require('./config/db');

//connect to database

connectDB();





const app = express();


app.use('/graphql', graphqlHTTP({
    schema: require('./schema/schema'),
    graphiql: process.env.NODE_ENV === 'development'
}))

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

