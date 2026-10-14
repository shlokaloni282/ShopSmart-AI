const mongoose = require("mongoose");
const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    const filter = {};

    if (req.query.search) {
      const search = String(req.query.search).replace(
        /[.*+?^${}()|[\]\\]/g,
        "\\$&",
      );

      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { brand: { $regex: search, $options: "i" } },
        { category: { $regex: search, $options: "i" } },
      ];
    }

    if (req.query.category) {
      filter.category = {
        $regex: String(req.query.category).replace(
          /[.*+?^${}()|[\]\\]/g,
          "\\$&",
        ),
        $options: "i",
      };
    }

    let sort = { createdAt: -1 };

    if (req.query.sort === "price_asc") {
      sort = { price: 1 };
    } else if (req.query.sort === "price_desc") {
      sort = { price: -1 };
    }

    const products = await Product.find(filter).sort(sort).limit(100);

    res.json({
      count: products.length,
      products,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch products",
    });
  }
};

const getProductById = async (req, res) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        message: "Invalid product ID",
      });
    }

    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch product",
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, description, brand, category, price, imageUrl, productUrl } =
      req.body;

    const product = await Product.create({
      name,
      description,
      brand,
      category,
      price,
      imageUrl,
      productUrl,
    });

    res.status(201).json({
      message: "Product added successfully",
      product,
    });
  } catch (error) {
    if (error.name === "ValidationError" || error.name === "CastError") {
      return res.status(400).json({
        message: error.message,
      });
    }

    res.status(500).json({
      message: "Failed to add product",
    });
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
};
