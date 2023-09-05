import "dotenv/config";
import { Response } from "express";
import { IContactFormRequest } from "../types/contactInterfaces";
import { StatusCodes } from "http-status-codes";
import sgMail from "@sendgrid/mail";

export const formController = async (
  req: IContactFormRequest,
  res: Response
) => {
  const { name, email, subject, message } = req.body;
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "josealbdr84@gmail.com",
    from: "jaderodev@gmail.com",
    subject: subject,
    text: "Portfolio Contact Form",
    html: `<h2>Email from ${name}, ${email}</h2><p>${message}</p>`,
  };
  const response = await sgMail.send(msg);
  res.status(StatusCodes.OK).json(response);
};
