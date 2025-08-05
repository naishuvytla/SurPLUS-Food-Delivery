import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://naishuvy:Zi0RJqhVw6uwwIgD@cluster0.imqci9v.mongodb.net/surplus').then(()=>console.log("DB Connected"))
}