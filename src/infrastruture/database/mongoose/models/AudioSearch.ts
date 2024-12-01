import mongoose from 'mongoose';
import { AudioSearch } from '@domain/entities/AudioSearch';

const audioSearchSchema = new mongoose.Schema({
  userId: { type: String, required: true, index: true },
  audioHash: { type: String, required: true, index: true },
  result: {
    artist: String,
    title: String,
    album: String,
    releaseDate: String,
    label: String,
    timecode: String,
    songLink: String
  },
  createdAt: { type: Date, default: Date.now }
});