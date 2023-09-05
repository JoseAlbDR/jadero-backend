export interface IContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface IContactFormRequest {
  body: IContactForm;
}
