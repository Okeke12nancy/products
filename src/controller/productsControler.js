const listProduct = (req, res) => {
  res.status(201).json({ message: "Product listed successfully" });
};

const getProducts = (req, res) => {
  res.status(200).json({ products: [] });
};

module.exports = { listProduct, getProducts };
