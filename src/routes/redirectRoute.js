const express=require("express");
const router  = express.Router();

const redirect_URL=process.env.URL;

router.get("/",(req,res)=>{
    res.redirect(redirect_URL);
})
module.exports = router;
