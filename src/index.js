const express = require("express");
const { ROLLUP_SERVER } = require("./shared/config");
const userRoutes = require("./routes/userRoutes");
const { productRoutes } = require("./routes/productsRoutes");
const cartesiRoutes = require("./routes/cartesiRoutes");
const app = express();
const PORT = process.env.PORT || 3000;
require("dotenv").config();

app.use(express.json());

console.log("HTTP rollup_server url is " + ROLLUP_SERVER);

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cartesi", cartesiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
