const con=require("../connector")

const getAllOrders=async(req,res)=>{

    let limit = parseInt(req.query.limit) || 10; //If Limit is given in the request query take that else take default value 10.
    let offset = parseInt(req.query.offset) || 0; //If Limit is given in the request query take that else take default value 0.

    if (isNaN(limit) || limit <= 0) {
        limit = 10;
    } //If the requested query is invalid take the default limit value.

    if (isNaN(offset) || offset < 0) {
        offset = 0;
    }//If the requested query is invalid take the default limit value.


    con.query('SELECT * FROM orders LIMIT ? OFFSET ?', [limit, offset], (error, results) => {
        if (error) {
            return res.status(500).send({ message: "An error occurred while fetching data" });
        }
        if (!results.length) {
            return res.status(404).send({ message: "No data found" });
        } else {
            res.status(200).render('orders', { orders: results });
        }
    }); 
    //query is created where if any error occures the error code will be 500, 
    // if result found and dataset is empty it will give 404, otherwise response status will be 200 with the result.
}


module.exports={getAllOrders};