import { Request, Response } from "express";
import { UploadedFile } from "express-fileupload";
import { StatusCodes } from "http-status-codes";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

export const uploadProjectImage = async (req: Request, res: Response) => {
  if (req.files) {
    const tempImage = req.files.image as UploadedFile;
    const result = await cloudinary.uploader.upload(tempImage.tempFilePath, {
      use_filename: true,
      folder: "projects",
    });
    fs.unlinkSync(tempImage.tempFilePath);
    res.status(StatusCodes.OK).json({ image: { src: result.secure_url } });
  }
};
