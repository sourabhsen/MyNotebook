import mongoose from 'mongoose';
import express from 'express';

let app = express();

let  Schema = mongoose.Schema;

let  projectworkschema = new Schema({
    title:String,
    link:String,
    description:{type: String, required:true},
    created_at: Date,
    date_label:String,
    images:Array,
    displayImage:String
     
});



// on every save, add the date
projectworkschema.pre('save', function(next) {
 
 // get the current date
  var currentDate = new Date();

  // if created_at doesn't exist, add to that field
  if (!this.created_at){
    this.created_at = currentDate;
    this.date_label =  this.created_at.toDateString();
  }else{
      this.date_label =  this.created_at.toDateString();
  }

  next();
});

 
 var Projects =  mongoose.model('projectwork',projectworkschema)

 //export default mongoose.model('BlogPost', BlogPostschema,'BlogPost');

module.exports  = Projects;