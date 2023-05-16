require('dotenv').config();

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000'     // 교차출처 리소스 공유 허용 URL
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
    console.log(`server is listening at localhost:${port}`);
});