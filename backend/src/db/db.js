const mongoose = require('mongoose')

async function connectDB(){
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("Mongo DB connected")
    })
    .catch((err)=>{
        console.log('mongo DB Error',err)
    })
}

module.exports = connectDB