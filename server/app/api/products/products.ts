import express from "express";

import prisma from "../../database";

const router = express.Router();

/* GET PRODUCTS */
router.get("/", async (req, res, next) => {
  const products = await prisma.products.findMany().catch((err) => {
    next(err)
  });

  if (!products) {
    return res.status(404).json({ message: "No products found" });
  }

  res.json(products);
});

export default router;
