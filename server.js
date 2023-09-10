
import {app} from "./app.js"

import {connectToDB} from "./data/db.js"

connectToDB();

app.get("/" , (req,res)=>{
    res.send("Welcome , make a post request with Postman to upload a word to my db!");
})

app.listen(process.env.PORT , (req,res)=>{
    console.log(`Server is working on ${process.env.PORT}`)
})