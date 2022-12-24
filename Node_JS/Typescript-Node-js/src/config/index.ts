import dotenv from 'dotenv';
dotenv.config();

export default {
  mainConfig: {
    PORT: process.env.PORT || 3000
  },
  apiConfig: {
    API_AVIONAPI: process.env.API_AVIONAPI
  }
};
