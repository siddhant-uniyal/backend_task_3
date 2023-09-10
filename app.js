import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import {config} from "dotenv"
export const app = express();

app.use(bodyParser.json())

import postRouter from "./routes/post_route.js"

config({
    path : "./data/config.env",
})

app.use(postRouter)