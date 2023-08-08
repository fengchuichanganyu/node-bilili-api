const { Op } = require('sequelize')
const Cart = require('../model/cart.model')

class CartService{
    async createdOrUpdate(user_id,goods_id){
      let res =  await Cart.findOne({
            where:{
                [Op.and]:{
                    user_id,
                    goods_id,
                },
            },
        })
        
        if(res){
            await res.increment('number')
            console.log(res)

           return await res.reload()
        }else{
             return await Cart.create({
                user_id,
                goods_id
             })
        }
    }
}
module.exports = new CartService()