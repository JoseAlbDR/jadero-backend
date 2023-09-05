export {};

declare global {
  namespace Express {
    interface Request {}
  }
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      PORT: string;
      DATABASE_URL: string;
      JWT_SECRET: string;
      JWT_LIFETIME: string;
      CLOUD_NAME: string;
      CLOUD_API_KEY: string;
      CLOUD_API_SECRET: string;
      SENDGRID_API_KEY: string;
    }
  }
}
