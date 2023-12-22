const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
    name : {type:String,required:true},
    image :{type:String,required:true},
    rentPerHour : {type:Number },
    fuelType : {type:String},
    bookedTimeSlots : [
        {
            from : {type:String,required:true},
            to:{type:String,required:true}
        }
    ],
    capacity : {type:Number}
    
},{
    collection : 'car',timestamps : true
})

module.exports = mongoose.model("car",carSchema)

