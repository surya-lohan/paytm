const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://admin:Jaat%405112@cluster0.yb0b4.mongodb.net/")


const userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
})

const User = mongoose.model("User" , userSchema)

module.exports = {
    User
}