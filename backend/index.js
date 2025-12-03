import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import chatbotRoutes from './routes/chatbot.route.js';

const app = express()
dotenv.config()
const port =process.env.PORT || 3000

// middleware. express jason data ko parse krta ha jo usy milta ha
app.use(express.json());
app.use(cors())


//database connection ha jo env sa link patch krta ha
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("connected to mongo db")
}).catch((error)=>{
    console.log("Error mongo db connection",error)
})


//define routes
app.use("/bot/v1/", chatbotRoutes)
app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})
