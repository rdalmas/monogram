import { NextFunction, Request, Response } from "express";

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).send({ errors: [{ message: "Something went wrong" }] });
};

export default errorHandler;
