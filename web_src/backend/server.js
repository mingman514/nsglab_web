require('dotenv').config({path: '../../.env'});

const env = process.env.NODE_ENV;
const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors({
  origin: '*',
}));

// Connect to MongoDB
const connect = require('./schemas')
connect();

// routers
// const indexRouter = require('./routes')
const studentRouter = require('./routes/student')
const contentRouter = require('./routes/content')

app.use('/student', studentRouter);
app.use('/content', contentRouter);
        
const port = process.env.PORT;
app.listen(port, () => {
    console.log("Node Env:", process.env.NODE_ENV);
    console.log(`server is listening at localhost:${port}`);
});