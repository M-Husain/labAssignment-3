const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EmployeeDB',{useNewUrlParser:true},(err)=> {
    if(!err){
        console.log('MongoDB connected to DB!')
    }else
    {
        console.log('error!'+err);
    }
});

require('./employee.model');