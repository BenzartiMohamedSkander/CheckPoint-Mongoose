const connectDB = require("./connectDB");
let mongoose = require('mongoose')

let PersonModel = require('./Person')

let person = new PersonModel({
  name: 'Mohamed',
  age:25,
  favoriteFoods:["Pasta","Panini"]
})


//****************************** */
//Create and Save a Record of a Model
//****************************** */

// person.save(function(err, data) {

//     err ? console.log(err):console.log(data)
  
//   });

//****************************** */





//****************************** */
// Create Many Records with "model.create()"
//****************************** */

// let arrayOfPeople =[{name :'Garry', age:35, favoriteFoods:["fried chicken","chicken wings","chicken nuggets"]},
//                     {name :'Hannah', age:24, favoriteFoods:["water melon","mango"]},
//                     {name :'Igor', age:52, favoriteFoods:["vegetable soup"]},
//                     {name :'Ali', age:82}]


// PersonModel.create(arrayOfPeople,function(err, data) {

//     err ? console.log(err):console.log(data)
  
//   })

//****************************** */


//****************************** */
// Using model.find() to Search Your Database
//****************************** */

// PersonModel
//   .find({
//     name: 'Ali'   // search query
//   })
//   .then(doc => {
//     console.log(doc)
//   })
//   .catch(err => {
//     console.error(err)
//   })

//****************************** */


//****************************** */
// Using model.findOne() to Return a Single Matching Document from Your Database
//****************************** */

// PersonModel
//   .findOne({
//     name: 'Ali'   // search query
//   })
//   .then(doc => {
//     console.log(doc)
//   })
//   .catch(err => {
//     console.error(err)
//   })
//****************************** */



//****************************** */
// Using model.findById() to Search Your Database By _id
//****************************** */

// PersonModel
//   .findById({
//      _id: "60391d1e74f841250087834e"   // search query
//   })
//   .then(doc => {
//     console.log(doc)
//   })
//   .catch(err => {
//     console.error(err)
//   })
//****************************** */


//****************************** */
//Perform Classic Updates by Running Find, Edit, then Save
//****************************** */

//  PersonModel
//   .findById({
//      _id: "60391d1e74f841250087834e"   // search query
//   })
//   .then(doc => {doc.favoriteFoods.push("hamburger");
//   doc.save((error,updatedRecord)=>{ 
//       if (error){console.log(error)}
//   else{console.log(updatedRecord )}
//       })

    
//   })
//   .catch(err => {
//     console.error(err)
//   })
//****************************** */


//****************************** */
//Perform New Updates on a Document Using model.findOneAndUpdate()
//****************************** */

// PersonModel
//   .findOneAndUpdate(
//     {
//       name: 'Hannah'  // search query
//     }, 
//     {
//       age: 20  // field:values to update
//     },
//     {
//       new: true,                       // return updated doc
     
//     })
//   .then(doc => {
//     console.log(doc)
//   })
//   .catch(err => {
//     console.error(err)
//   })

  //****************************** */




  //****************************** */
//Delete One Document Using model.findByIdAndRemove
//****************************** */

// PersonModel
// .findByIdAndRemove({
//   _id: '60391d1e74f841250087834f'
// })
// .then(response => {
//   console.log(response)
// })
// .catch(err => {
//   console.error(err)
// })
  //****************************** */



    //****************************** */
//MongoDB and Mongoose - Delete Many Documents with model.remove()
//****************************** */
// PersonModel.remove({name:"Ali"},(error, JSONStatus)=>{
//     error ? console.log(error):console.log(JSONStatus)}
// )

  //****************************** */




      //****************************** */
//Chain Search Query Helpers to Narrow Search Results
//****************************** */
// PersonModel.find({favoriteFoods:{$all:["burrito"]}})                   
        //  .limit(2)                // limit to 2 items
        //  .sort({name: 1})      // sort ascending by name
        //  .select('-age') // hide the age
        //  .exec()                   // execute the query
        //  .then(docs => {
        //     console.log(docs)
        //   })
        //  .catch(err => {
        //     console.error(err)
        //   })
  //****************************** */