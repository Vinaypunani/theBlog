const mongoose = require('mongoose');
const URI = "mongodb+srv://vinaypunani:C9218730@ecomweb.kwc4iyt.mongodb.net/?retryWrites=true&w=majority&appName=EcomWeb"

mongoose.connect(URI)
.then(()=>{
    console.log("Connected")
})
.catch((err)=>{
    console.log('Error : ',err)
})

const blogSchema = mongoose.Schema({
    blogTitle: String,
    blogCategory : String,
    blogImage : String,
    blogData : String
})

module.exports = mongoose.model('blogs' , blogSchema)