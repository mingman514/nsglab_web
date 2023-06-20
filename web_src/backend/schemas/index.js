const mongoose = require('mongoose');
const dbUrl = (process.env.NODE_ENV === "production" ? process.env.MONGO_URI : process.env.MONGO_URI_TEST);

const connectToMongo = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(dbUrl)
        console.log('Mongo connected')
    }
    catch(error) {
        console.log(error)
        process.exit()
    }
    }
module.exports = connectToMongo;

// Query Example
// db.students.insertOne({
//     "name" : "MINGYU CHOI",
//     "degree" : "master",
//     "is_alumni" : true,
//     "start_year" : 2021,
//     "start_month" : 9,
//     "end_year" : 2023,
//     "end_month" : 2,
//     "topic" : "RDMA, Multi-path",
//     "email" : "mingyuchoi514@gmail.com",
//     "image_type" : "jpg",
//     "created" : new Date()
// })