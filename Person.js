let mongoose = require('mongoose')


let personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true},
    age: Number,
    favoriteFoods:{
        type:Array,
        default:["Sea food","Berger"]

     
    }
       //without default we put 
       // favoriteFoods:[String]

})
module.exports = mongoose.model('Person', personSchema)