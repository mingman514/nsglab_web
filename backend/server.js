require('dotenv').config();

const env = process.env.NODE_ENV;
const express = require('express');
const app = express();

const cors = require('cors');

if (env === "production"){
  app.use(cors({
    origin: 'https://netsys.skku.edu'     // 교차출처 리소스 공유 허용 URL
  }));
} else {
  app.use(cors({
    origin: 'http://localhost:3000'
  }));
}

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
    console.log(`server is listening at localhost:${port}`);
});
