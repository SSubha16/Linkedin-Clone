import express from 'express';
import cors from 'cors' ;
import dotenv from 'dotenv' ;
import mongoose from 'mongoose';
import postRoutes from './routes/posts.routes.js';
import userRoutes from './routes/user.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(postRoutes);
app.use(userRoutes);
app.use(express.static("uploads"));


const start = async () =>{
    const connetDB = await mongoose.connect("mongodb+srv://ssubha3333:SSubha16062001@cluster0.qgqqy.mongodb.net/");
    app.listen(9090 , () => {
         console.log("server is running on port : 9090")
    })
}
start();