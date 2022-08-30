const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required: true
    },
    time:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true,
        trim:true
    },
    body:{
        type:String,
        required:true,
        trim:true
    }
})

module.exports = mongoose.model('post',postSchema)