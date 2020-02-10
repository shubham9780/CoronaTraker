const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://shubham:samsung@9780@cluster0-qtiyc.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
      console.log("mongoose connected");
  client.close();
})
require('dotenv').config();

const app=express();
const port=process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// const uri=process.env.ATLAS_URI;
// mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true, useUnifiedTopology: true});

// const connection=mongoose.connection;
// connection.once('open',()=>{
//     console.log('Mongo db is connected');
// })

const exerciseRouter=require('./routes/exercise');
const userRouter=require('./routes/user');


app.use('/exercise',exerciseRouter);
app.use('/user',userRouter);

app.listen(port,()=>{
    console.log(`server is running on port :${port}`);
});