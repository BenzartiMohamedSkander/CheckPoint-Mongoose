let mongoose = require('mongoose');



const dotenv = require("dotenv");
dotenv.config({path:'./config/.env'})




class Database {
  constructor() {
    this._connect()
  }
_connect() {
     mongoose.connect(process.env.MONGO_URI, {
               useNewUrlParser: true,
               useUnifiedTopology: true,
          })
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}





//Add

// msg.save()
//    .then(doc => {
//      console.log(doc)
//    })
//    .catch(err => {
//      console.error(err)
//    })



//Read
// EmailModel
//   .find({
//     email: 'ada.lovelace@gmail.com'   // search query
//   })
//   .then(doc => {
//     console.log(doc)
//   })
//   .catch(err => {
//     console.error(err)
//   })



//Update
// EmailModel
//   .findOneAndUpdate(
//     {
//       email: 'ada.lovelace@gmail.com'  // search query
//     }, 
//     {
//       email: 'theoutlander@live.com'   // field:values to update
//     },
//     {
//       new: true,                       // return updated doc
//       runValidators: true              // validate before update
//     })
//   .then(doc => {
//     console.log(doc)
//   })
//   .catch(err => {
//     console.error(err)
//   })



//Delete
// EmailModel
//   .findOneAndRemove({
//     email: 'theoutlander@live.com'
//   })
//   .then(response => {
//     console.log(response)
//   })
//   .catch(err => {
//     console.error(err)
//   })

 module.exports = new Database()

