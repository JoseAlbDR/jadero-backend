// import Joi from "joi";
import Joi from "joi";
import { IContactForm } from "../types/contactInterfaces";

export const validateContactForm = (query: unknown) => {
  const contactFormSchema = Joi.object<IContactForm>({
    name: Joi.string().min(3).required().label("Name"),
    email: Joi.string().required().email().label("Email"),
    subject: Joi.string().min(3).required().label("Subject"),
    message: Joi.string().min(10).required().label("Message"),
  });

  return contactFormSchema.validate(query, {
    errors: { wrap: { label: false } },
    messages: {
      "object.unknown": "Unknown parameter: {#key}",
      "string.pattern.base": "Invalid syntax for numeric condition: {#value}",
      "any.empty": "{#key} can not be empty",
    },
  });
};
