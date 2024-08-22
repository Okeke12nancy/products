const express = require("express");
const {
  processVoucher,
  generateReport,
} = require("../controller/cartesiController");

const cartesiRoutes = express.Router();

cartesiRoutes.post("/voucher", processVoucher);
cartesiRoutes.get("/report", generateReport);

module.exports = cartesiRoutes;
