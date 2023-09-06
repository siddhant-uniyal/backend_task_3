/* algo:
1)create and connect to a db
2) define schema
3) save entry in db
4) display data of saved entry */

const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const app = express()

//middleware to allow request to be stored in req.body so we can later store info to send to db
app.use(bodyParser.json())

//creating server
app.listen(5000,()=>{})


//1) create and connect to a db
const connectToDB = async() =>{ //async to avoid promise chain , better syntax
  try{
    await mongoose.connect("mongodb://0.0.0.0:27017",{
      dbName:"dictionary" , //initialize db
      useNewUrlParser : true,  //remove deprecation warning
      useUnifiedTopology : true, //remove deprecation warning
    })
  }
  catch(e){
    console.log(e);
  }
}

connectToDB();

//2) schema definition
const wordSchema = new mongoose.Schema({
  word :{
    type : String,
    maxlength : 12,
  },
  definition : String,
  synonyms : String,
  antonyms : String,
})

//creating a model
const Word = new mongoose.model("Word" , wordSchema);

//if browser wants to create , it has to send post request
app.post("/words" , async(req,res)=>{
  try{
    const {word , definition , synonyms , antonyms} = await req.body; //elems of req.body go sequentially in word , meaning , s ,a


    const word_to_save = new Word({
      word : word,
      definition : definition,
      synonyms : synonyms,
      antonyms : antonyms,
    })

    await word_to_save.save(); //.save() to save in dictionary database

    res.json(word_to_save);//send saved word as response
  }

  catch(e){
    res.status(500).json({error : "Error"});
  }


  }
)

