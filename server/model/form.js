const mongoose = require('mongoose')
const FormSchema=new mongoose.Schema({

    companyName:String,
    jobTitle:String,
    companyLogo:String,
    maxPrice:Number,
    salaryType:String,
    jobLocation:String,
    employmentType:String,
    description:String,
    minPrice:Number,
    experienceLevel:String
    
})

module.exports=mongoose.model("Forms",FormSchema); 