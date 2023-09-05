import express from "express";
import { formController } from "../controllers/formController";

const router = express.Router();

router.post("/", formController);

export default router;
