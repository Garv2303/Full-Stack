const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.3',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    dbName:'dbgamex'
}).then(()=>{
    console.log('db connected');
}).catch((error)=>{
    console.log(error);
});
module.exports=mongoose;