import { Response } from "express";
import { IContactFormRequest } from "../types/contactInterfaces";
import { StatusCodes } from "http-status-codes";

export const formController = (req: IContactFormRequest, res: Response) => {
  console.log(req.body);
  res.status(StatusCodes.OK).json({ data: req.body });
};
