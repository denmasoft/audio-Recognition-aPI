import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/audio-search',
  jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
  auddApiKey: process.env.AUDD_API_KEY,
  maxFileSize: 10 * 1024 * 1024, // 10MB - AudD limit
  allowedMimeTypes: ['audio/mpeg', 'audio/wav', 'audio/x-wav'],
};