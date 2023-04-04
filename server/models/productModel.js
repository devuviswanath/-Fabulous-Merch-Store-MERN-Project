// const mongoose = require('mongoose'); // Erase if already required
// const bcrypt = require('bcrypt');

// // Declare the Schema of the Mongo model
// var productSchema = new mongoose.Schema({
//     title:{
//         type:String,
//         required:true,
//         trim:true,
//     },
//     slug:{
//         type:String,
//         required:true,
//         unique:true,
//         lowercase:true,
//     },
//     description:{
//         type:String,
//         required:true,
//     },
//     price:{
//         type:Number,
//         required:true,
//     },
//     category:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:"Category",
//     },
//     quantity: Number,
//     images:{
//         type:Array,
//     },
//     color:{
//         type:String,
//         enum: ['Black', 'Blue']
//     }
    
//     brand:{
//         type: String,
//         requred:true,
//     }

// });

// // Encrypting the password
// userSchema.pre('save', async function(next) {
//     const salt = await bcrypt.genSaltSync(10);
//     this.password = await bcrypt.hash(this.password, salt);
// });

// // Comapring the entered password and already existing password
// userSchema.methods.isPasswordMatched = async function(enteredPassword){
//     return await bcrypt.compare(enteredPassword, this.password);
// }

// //Export the model
// module.exports = mongoose.model('User', userSchema);

