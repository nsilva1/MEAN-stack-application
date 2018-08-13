const mongoose = require('mongoose');

const shoppinglistSchema = mongoose.Schema({

    itemName : {
        type : String,
        required : true
    },
    itemQuantity : {
        type : Number,
        required : true
    },
    itemBought : {
        type : Boolean,
        required : true
    }

});

const List = module.exports = mongoose.model('List', shoppinglistSchema);