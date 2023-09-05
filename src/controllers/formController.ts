import { Request, Response } from "express";

export const formController = (_req: Request, res: Response) => {
  res.send("Form route");
};
