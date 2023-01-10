require('dotenv').config()
const mongoose = require('mongoose')

const db = process.env.MONGODB_URI
const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Yeaah...Mongodb connected !!')
  } catch (err) {
    console.log(`Ooh..error occured, ${err.message}`)
    process.exit(1)
  }
}

module.exports = connectDB
