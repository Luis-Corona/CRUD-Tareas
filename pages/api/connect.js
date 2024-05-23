import mongoose from "mongoose";

const MONGODBURL = process.env.URL;

const connectDB = async () => {
await mongoose.connect(MONGODBURL,{}).then(()=>{
    console.log(`Connected MongoDB`);
}).catch((err) => {
    console.log(err);
})
} 

export default connectDB;