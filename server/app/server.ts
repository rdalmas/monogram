import express from "express";
import cors from "cors";
import compression from 'compression';
import 'dotenv/config';

import products from "./api/products/products";
import errorHandler from "./middlewares/error-handling";

const PORT = process.env.PORT || 5050;

/* EXPRESS SETUP */
const app = express();
app.use(compression());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

/* PRODUCTS ROUTES */
app.use("/api/products", products);

/* ERROR HANDLING */
app.use(errorHandler);

/* HEALTH CHECK */
app.get('/', (_req, res) => {
  res.status(200).send('🚀 Server is up and running!');
});

/* SERVER */
const server = app.listen(PORT, () => {
  console.log(`🚀 Server listening on ${PORT}`);
});

export default server;
