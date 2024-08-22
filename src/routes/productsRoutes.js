const express = require("express");
const { listProduct, getProducts } = require("../controller/productsControler");

const router = express.Router();

router.post("/list", listProduct);
router.get("/", getProducts);

module.exports = { productRoutes: router };
