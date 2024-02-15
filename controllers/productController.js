const { StatusCodes } = require("http-status-codes");
const productModel=require('../Models/product')


const createproductcontroller = async (req, res) => {
    console.log(req.body);
    const product = await productModel.create({ ...req.body });
    res.status(StatusCodes.CREATED).json({ product });
  }



module.exports={createproductcontroller}
