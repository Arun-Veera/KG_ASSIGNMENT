const mongoose = require('mongoose');
const dbConfig = require('../config/db-config');

mongoose.connect(dbConfig.url,{
    useNewUrlParser:true,
    useUnifiedTopology: true 
}).then(()=>{
    console.log("DB connected");
}).catch(err =>{
    console.log('DB connection problem - ',err);
    process.exit();
})

const timeSlot = new mongoose.Schema({
    fromTime:String,
    toTime:String
},
{
    timestamps:true,
    collation: 'TIMESLOT'
})

var timeSlotVal = mongoose.model('TIMESLOT', timeSlot);
module.exports = {
    timeSlot : timeSlotVal
}