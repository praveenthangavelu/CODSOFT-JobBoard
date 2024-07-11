const express= require('express')
const mongoose = require('mongoose')
const app= express()
const cors = require('cors')
const FormModel = require('./model/form');
// const Usermodel = require('./model/user'); 

app.use(cors())
app.use(express.json())
app.listen(3001,()=>
    console.log('server is running')
)
mongoose.connect("mongodb://127.0.0.1:27017/JobPortal")


app.post("/create", (req, res) => {
    FormModel.create(req.body)
        .then(forms => res.json(forms))
        .catch(err => res.json(err));
});

app.get("/get", (req, res) => {
    FormModel.find({})
        .then(forms => res.json(forms))
        .catch(err => res.json(err));
});
app.get("/get/:id", (req, res) => {
    const id = req.params.id;
    FormModel.findById({_id:id})
        .then(forms => res.json(forms))
        .catch(err => res.json(err));
});

app.put("/update/:id", (req, res) => {
    const id =req.params.id;
    FormModel.findByIdAndUpdate({_id:id},{companyName:req.body.companyName,
        jobTitle:req.body.jobTitle,
        companyLogo:req.body.companyLogo,
        maxPrice:req.body.maxPrice,
        salaryType:req.body.salaryType,
        jobLocation:req.body.jobLocation,
        employmentType:req.body.employmentType,
        description:req.body.description,  
        })
        .then(forms => res.json(forms))
        .catch(err => res.json(err));
});


app.delete("/delete/:id", (req, res) => {
    const id =req.params.id;
    FormModel.findByIdAndDelete({_id:id})
        .then(forms => res.json(forms))
        .catch(err => res.json(err));
});

