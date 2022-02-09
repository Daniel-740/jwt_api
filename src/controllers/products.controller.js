import Product from "../models/Product"

export const createProduct = async (req, res) => {
    
    const { name, category, price, imgURL } = req.body

    const newProduct = new Product({ name, category, price, imgURL})

    const response = await newProduct.save();

    res.status(201).json(response)
}

export const getProducts = async (req, res) => {
    const products = await Product.find()
    res.json(products);
}

export const getProductById = async (req, res) => {
    const { id } = req.params
    const response = await Product.findById(id)
    res.status(200).json(response)
}

export const updateProductById = async (req, res) => {
    const { id } = req.params
    const response = await Product.findByIdAndUpdate(id, req.body, {
        new: true
    })

    res.status(200).json(response);
}

export const deleteProductById = async (req, res) => {
    const { id } = req.params
    const response = await Product.findByIdAndDelete(id)
    res.status(200).json({success: true})
}