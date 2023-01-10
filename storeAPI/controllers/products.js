const Product = require('../models/products');

const getAllProductsStatic = async (req, res) => {
    // throw new Error('Testing Async Errors')
    const products = await Product.find({
        // featured: true
        // name: 'entertainment center'
        page: '2'
    })
    res.status(200).json({ products, nbHits: products.length })
}

const getAllProducts = async (req, res) => {
    // console.log(req.query);
    const { featured } = req.query;
    const queryObject = {}
    if (featured) {
        queryObject.featured = featured === 'true' ? true : false
    }
    console.log(queryObject);
    const products = await Product.find(queryObject)
    res.status(200).json({ products, nbHits: products.length })
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}