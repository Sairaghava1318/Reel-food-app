require('dotenv').config();
const app = require('./src/app') // start server
const connectDB = require('./src/db/db')

connectDB()
app.listen(3000,()=>{
    console.log('sever is running on 3000')
})
