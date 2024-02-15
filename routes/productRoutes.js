const express = require('express')
const router= express.Router();
const {createproductcontroller}= require('../controllers/productController')

router.route('/').post(createproductcontroller)

module.exports=router



// const express=require('express')
// const router=express.Router();
// const {
// createProduct
// }=require('../controllers/productController')

// router.route('/').post(createProduct)

// module.exports=router