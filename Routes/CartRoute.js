const { addToCart, fetchCartData, removeProduct } = require("../DatabaseController/cart");

const CartRoute = require("express").Router();

CartRoute.post("/addtocart/:product_id", addToCart)
CartRoute.get("/fetchcartdata/:user_id", fetchCartData)
CartRoute.delete('/delete/:product_id', removeProduct)

module.exports = CartRoute;
