/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("node:fs");
const path = require("node:path");

const express = require("express");
const app = express();
const port = 3001;

app.get("/api/products", (_, res) => {
  const data = fs.readFileSync(path.join(__dirname, "products.json"), "utf8");
  res.send(data);
});

app.listen(port, () => {
  console.log(`product server started at ${port}`);
});
