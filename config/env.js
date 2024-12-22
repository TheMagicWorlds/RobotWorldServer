import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const SELF_BASE_URL = process.env.SELF_BASE_URL;
export const FRONTEND_BASE_URL = process.env.FRONTEND_BASE_URL;