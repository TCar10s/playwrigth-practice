import dotenv from 'dotenv';

dotenv.config();

export const URLS = {
  SAUCEDEMO: process.env.SAUCEDEMO_URL,
};

export const CREDENTIALS = {
  SAUCEDEMO_USERNAME: process.env.SAUCEDEMO_USERNAME,
  SAUCEDEMO_PASSWORD: process.env.SAUCEDEMO_PASSWORD,
};
