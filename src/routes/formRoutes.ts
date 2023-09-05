import express from "express";
import { formController } from "../controllers/formController";
import { validateBody } from "../middleware/joi-validation";
import { validateContactForm } from "../utils/joiValidation";

const router = express.Router();

router.post("/", validateBody(validateContactForm), formController);

export default router;
