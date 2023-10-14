const express = require("express");
var cors = require("cors");
const productRoutes = require("./routes/product.route");
const categoriesRoutes = require("./routes/categories.route");
const mongoConnect = require("./config/db.config");
mongoConnect();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Task 2 b.
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Clothing application." });
});

app.use('/api/products', productRoutes)
app.use('/api/categories', categoriesRoutes)

app.listen(port, () => {
    console.log(`Clothing app listening on port http://localhost:${port}`);
});
