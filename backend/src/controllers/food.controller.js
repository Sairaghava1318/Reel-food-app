const foodModel = require('../models/food.model')
async function createFood(req,res) {
    if(!req.foodPartner){
        return res.status(401).json({
            message:"You are not authorized"
        })
    }
}
module.exports = {createFood}