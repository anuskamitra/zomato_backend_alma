//This is /orders route where we can get all the orders ,and by using 
// offset and limit we can get specify the dataset

const express=require("express");
const router=express.Router();

const {getAllOrders}=require("../contorllers/ordersController");

router.get("/",getAllOrders)   //In controllers I have ordersController where the logic is written.

module.exports = router;