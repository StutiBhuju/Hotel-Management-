import express from 'express'
import cors from 'cors'
import auth from './routes/auth/auth.js'
import room from './routes/RoomDetails/roomdetail.js'
import bookings from './routes/bookingRoutes.js'
import cookieParser from 'cookie-parser'

const app = express()


app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);
app.use(express.json())
app.use(cookieParser());



app.use("/api/auth",auth)

app.use("/api/rooms",room)
app.use("/api/bookings",bookings)




export default app