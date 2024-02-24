import express from "express";
import cors from "cors";
import compression from 'compression';

import products from "./api/products/products";
import errorHandler from "./middlewares/error-handling";

/* EXPRESS SETUP */
const app = express();
app.use(compression());
app.use(express.json());
app.use(cors());

/* PRODUCTS ROUTES */
app.use("/api/products", products);

/* ERROR HANDLING */
app.use(errorHandler);

/* SERVER */
const server = app.listen(3001, () => {
  console.log("server running on localhost:3001");
});

export default server;
