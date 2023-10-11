const { orderAdd, fetchOrder, fetchAllOrder, deleteUserOrder, deleteAllOrder } = require("../DatabaseController/orderdDb");

const orderRoute = require("express").Router();

orderRoute.post('/addorder', orderAdd)
orderRoute.get('/orderuserdetail/:user_id', fetchOrder)
orderRoute.get("/ordersdetail", fetchAllOrder)
orderRoute.get("/orderdelete/:user_id", deleteUserOrder)
orderRoute.get("/orderalldelete", deleteAllOrder);

module.exports = orderRoute