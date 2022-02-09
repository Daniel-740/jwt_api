import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/api_jwt_db')
    .then(db => console.log('Db is connected'))
    .catch(e => console.log(e))