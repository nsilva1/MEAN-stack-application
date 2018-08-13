const express = require('express');
var router = express.Router();

const Item = require('../model/shoppinglist')

router.get('/items', (req, res, next) => {
    Item.find((err, lists) => {
        if(err){
            return res.json(err);
        }
        res.json(lists);
    });
});

router.post('/item', (req, res, next) => {
    let newShoppingList = new Item({
        itemName : req.body.itemName,
        itemQuantity : req.body.itemQuantity,
        itemBought : req.body.itemBought
    });

    newShoppingList.save((err, lists) => {
        if(err){
            return res.json(err);
        }
        res.json({msg:'Item has been added to database'});
    });

});

router.put('/item/:id', (req, res, next) => {
    Item.findOneAndUpdate({_id : req.params.id},{
        $set:{
            itemName : req.body.itemName,
            itemQuantity : req.body.itemQuantity,
            itemBought : req.body.itemBought
        }
    },
        function(err, lists){
            if(err){
                return res.json(err);
            }
            res.json(lists);
        });
});

router.delete('/item:id', (req, res, next) => {
    Item.remove({_id : req.params.id}, (err, lists) => {
        if(err){
            return res.json(err);
        }
        res.json(lists);
    });
});

module.exports = router;