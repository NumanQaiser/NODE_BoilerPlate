const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_DB).then(()=> {
    console.log("DB is Connected" , process.env.MONGO_DB)
}).catch((err)=> {
    console.log("DB cann't be connected" ,err)
})