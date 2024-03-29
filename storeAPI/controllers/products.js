const Product = require('../models/products');

const getAllProductsStatic = async (req, res) => {
    // throw new Error('Testing Async Errors')
    // const search = 'ab';
    // const products = await Product.find({})
    // featured: true
    // name: { $regex: search, $options: 'i' },
    // page: '2'
    // minus(-) diyo vane descending order ma sort hunxa
    // const products = await Product.find({}).sort('name')
    // const products = await Product.find({}).sort('-name')
    // const products = await Product.find({}).sort('price')
    // const products = await Product.find({}).sort('-price')
    // const products = await Product.find({}).sort('-name price')
    const products = await Product.find({}).select('name rating')
    res.status(200).json({ products, nbHits: products.length })
}

const getAllProducts = async (req, res) => {
    // console.log(req.query);
    const { featured, company, name, sort, fields } = req.query;
    const queryObject = {}
    if (featured) {
        queryObject.featured = featured === 'true' ? true : false
    }
    if (company) {
        queryObject.company = company
    }
    if (name) {
        // queryObject.name = name
        queryObject.name = { $regex: name, $options: 'i' }
    }
    // console.log(queryObject);
    // const products = await Product.find(queryObject)
    let result = Product.find(queryObject)
    // sort
    if (sort) {
        // console.log(sort);
        const sortList = sort.split(',').join('');
        result = result.sort(sortList)
    } else {
        result = result.sort('createdAt')
    }

    if (fields) {
        const fieldList = fields.split(',').join('')
        result = result.select(fieldList)
    }

    const products = await result
    res.status(200).json({ products, nbHits: products.length })
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}