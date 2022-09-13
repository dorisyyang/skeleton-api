const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const { getFileData } = require('../common')


app.get("/api", (req, res) => {
    res.json({
      code: 200,
      message: "Hello from server!" 
    });
});


app.get("/api/header", async(req, res) => {
  const headerData = await getFileData('header')
  res.json({
    code: 200,
    data: headerData
  });
});

app.get("/api/footer", async(req, res) => {
  const footerData = await getFileData('footer')
  res.json({
    code: 200,
    data: footerData
  });
});


app.get("/api/products", async(req, res) => {
  const productsData = await getFileData('products')
  res.json({
    code: 200,
    data: productsData
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});