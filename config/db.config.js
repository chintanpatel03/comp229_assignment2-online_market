const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/Marketplace?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const mongoConnect = () => {
    mongoose.connect(mongoURI, () => {
        console.log("Connected to mongoDB successfully");
    });
}

module.exports = mongoConnect;