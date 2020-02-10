const mongoose=require('mongoose');

const Schema=mongoose.Schema;


const exerciseSchema = new Schema({
username:{
  username:{type:String,required:true},
  description:{type:String,required:true},
  duration:{type:Number,required:true},
  date:{type:Date,required:true},
},
},{
    timesstamps:true,
});

const Exercise=mongoose.model('Exercise', exerciseSchema);

module.export = Exercise;