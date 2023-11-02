import express from 'express'
import { json } from 'body-parser';
import { userRouter } from './routes/user.route';
import mongoose from 'mongoose';
import 'dotenv/config';
import { flipRouter } from './routes/flips.route';
import { apiRouter } from './routes/api.route';
const cors = require('cors')

require('dotenv').config()

mongoose
    .connect("mongodb+srv://thrillseeker:1115@cluster0.dnl8hkl.mongodb.net/coinflip")
    .then((x) => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch((err) => {
        console.error('Error connecting to mongo', err.reason)
    })

const app = express();
app.use(cors())
app.use(json())
app.use('/', (req: Request, res: Response) => {
    return res.send("users")
})
app.use("/apis", apiRouter)
app.use("/users", userRouter)
app.use("/flips", flipRouter)
app.listen(4444, () => {
    console.log(("server is listening on port 4444"))
})