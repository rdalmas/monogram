import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const app = express();

app.use(express.json());
app.use(cors());
const prisma = new PrismaClient();

app.get("/api/products", async (req, res) => {
  const products = await prisma.products.findMany();
  res.json(products);
});

app.listen(3001, () => {
  console.log("server running on localhost:3001");
});
