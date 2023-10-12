// Do not expose your credentials in your code.
let config = require('./config');

// Database setup
const mongoose = require('mongoose');
const productSchema = mongoose.Schema(
    {
       name: {
        type :String,
        required:[true,"Please enter a product name"]
       },
      Description:{
        type :String,
      },
      price:{

        type :Number,
      },
      published:{
        type: Boolean,
      },
      category:
      {
        type: String,
      }
    },
    {
        timestamps : true 
    }
   
)
const Product  = mongoose.model('Product', productSchema)
module.exports = Product;
const categorySchema = mongoose.Schema(
    {
        name:{
            type :String,
            required:[true,"Please enter name"]
        }

    }

)
    const Category  = mongoose.model('Category', productSchema)
module.exports = Category;
module.exports = function(){

    mongoose.connect(config.ATLASDB);

    let mongodb = mongoose.connection;

    mongodb.on('error', 
        console.error.bind(console, 'Connection Error: '));
    mongodb.once('open', ()=>{
        console.log("====> Connected to MongoDB.");
    })

    return mongodb;

}