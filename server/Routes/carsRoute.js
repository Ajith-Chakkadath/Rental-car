
const express = require('express')

const router = express.Router()
// const cors = require('cors')
// app.use(cors())
const Car = require("../Models/carmodel.js")

router.get("/getcallcars" , async(req,res) =>{
    try{
        const cars =await Car.find()
        res.send(cars)
    }
    catch(error){
        return res.status(400).json(error)
    }
})


module.exports = router