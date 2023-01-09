const Product = require('../models/products');

const getAllProductsStatic = async (req, res) => {
    // throw new Error('Testing Async Errors')
    const products = await Product.find({
        // featured: true
        name: 'entertainment center'
    })
    res.status(200).json({ products, nbHits: products.length })
}

const getAllProducts = async (req, res) => {
    res.status(200).json({ msg: 'products route' })
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}