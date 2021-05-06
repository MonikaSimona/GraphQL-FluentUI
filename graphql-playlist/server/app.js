const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose')
const cors =  require('cors')

const app = express();

//allow cross-origin request

app.use(cors())

mongoose.connect('mongodb+srv://user1:user1@cluster0.dmish.mongodb.net/graphQL?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.once('open', () => {
    console.log('Connected to library database')
})
.on('error', (error)=> {
    console.log(error.message);
});

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});