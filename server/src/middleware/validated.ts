// validated.ts - CHECKS THAT :id IN THE URL IS A VALID MONGODB ID
// runs BEFORE teh controller on routes
//  - valid id -> calls next() so the controller will run
// - invalid id -> stop here and send a 400 (bad request)

import { NextFunction, Request, Response } from "express";
import { isValidObjectId } from "mongoose";

export const validateId = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    res.status(400).json({ message: `Invalid task ID: ${id}` });
  }

  next();
};
