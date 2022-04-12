const Product = require("../../models/products").model;

const getAll = async () => {
  const allProducts = await Product.find({}).exec();
  return allProducts;
};

const getById = async (id) => {};

const create = async (productData) => {
  const { name, price, description, image } = productData;
  const newProduct = new Product({
    name,
    description,
    price,
    image,
  });

  const savedProduct = await newProduct.save();

  return savedProduct;
};

const update = async (id, productData) => {
  // Actualizar un producto
};

const del = async (id) => {
  // Eliminar un producto
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  del,
};
