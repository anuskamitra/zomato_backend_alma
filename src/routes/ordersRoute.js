const express=require("express");
const router=express.Router();
const {getAllOrders}=require("../contorllers/ordersController");
const con=require("../connector")


router.get("/",getAllOrders)


module.exports = router;