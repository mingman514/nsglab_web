require('dotenv').config({path: '../../.env'});
console.log("path", __dirname)

const env = process.env.NODE_ENV;
const express = require('express');
const app = express();

const cors = require('cors');

const whiteList = ["https://netsys.skku.edu", "http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) { 
    if (whiteList.indexOf(origin) !== -1) { // 만일 whitelist 배열에 origin인자가 있을 경우
      callback(null, true); // cors 허용
    } else {
      callback(new Error("Not Allowed Origin!")); // cors 비허용
    }
  },
};
app.use(cors(corsOptions));

// app.use(cors({
//   origin: '*',
// }));

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
