import mongoose from "mongoose";


//! User Schema
let userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})

//! User Model
export let Users = mongoose.model("users", userSchema)