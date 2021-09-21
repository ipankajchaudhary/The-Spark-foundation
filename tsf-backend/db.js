const mongoose = require('mongoose')
require('dotenv').config()
const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected")
    })
}

module.exports = connectToMongo;