const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/studentReg",{
}).then(()=>{
    console.log("Connection successful");
}).catch(()=>{
    console.log("Connection failed");
});
