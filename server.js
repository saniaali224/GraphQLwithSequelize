"use strict";
const express = require('express');
const expressGraphQL = require("express-graphql");
const cors = require('cors');
const bodyParser = require('body-parser');


const Schema = require("./GraphQLSchema");


// port has been Set up for server to listen on
const port = process.env.PORT || 9999;
// express used to create a http server
const app = express();
// bodyparser
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
//CORS
app.use(cors());
app.options('*', cors());
//routes
app.get('/', (req, res) => {
    res.json('iam working !!!!!!');
});

app.use("/graphql", expressGraphQL({
    schema: Schema,
    graphiql: true
})
);
//Message displayed to know if the port is running or not
app.listen(port, () => console.log('working on port ' + port));