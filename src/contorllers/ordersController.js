const con=require("../connector")

const getAllOrders=async(req,res)=>{

    let limit = parseInt(req.query.limit) || 10; 
    let offset = parseInt(req.query.offset) || 0; 

    if (isNaN(limit) || limit <= 0) {
        limit = 10;
    }
    if (isNaN(offset) || offset < 0) {
        offset = 0;
    }
    con.query('SELECT * FROM orders LIMIT ? OFFSET ?', [limit, offset], (error, results) => {
        if (error) {
            console.error("Error fetching data:", error);
            return res.status(500).send({ message: "An error occurred while fetching data" });
        }

        if (!results.length) {
            return res.status(404).send({ message: "No data found" });
        } else {
            return res.status(200).send(results);
        }
    });
}


module.exports={getAllOrders};