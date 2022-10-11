import dotenv from 'dotenv'
dotenv.config();

import express, { json } from "express";
import mongoose from 'mongoose';
const app = express();
import cors from 'cors';
import connectDB from './config/conn.js'
import authRoutes from './routes/auth.js'
import roomsRoutes from './routes/rooms.js'
import hotelRoutes from './routes/hotels.js'
import usersRoutes from './routes/users.js'

// db connecting here
connectDB();

// using middleware here
app.use(cors());
app.use(json());

// calling our http request here
app.use('/api/auth', authRoutes)
app.use('/api/rooms', roomsRoutes)
app.use('/api/hotel', hotelRoutes)
app.use('/api/users', usersRoutes)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.send(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})


// here we are calling our server to connect 
mongoose.connection.once('open', () => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, (err) => {
        if (err) {
            console.log(`error in running the server: ${err}`)
        }
        console.log(`server is running on port: ${process.env.PORT}`);
    })
})
