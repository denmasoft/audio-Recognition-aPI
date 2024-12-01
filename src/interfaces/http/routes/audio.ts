import { Router } from 'express';
import { AudioController } from '../controllers/AudioController';
import { authenticate } from '../middleware/auth';
import { validateAudioUpload } from '../validators/audioValidator';
import { upload } from '../middleware/upload';

export const audioRouter = Router();
const audioController = new AudioController(
  container.resolve('recognizeAudioUseCase'),
  container.resolve('audioRecognitionService')
);

audioRouter.post(
  '/recognize',
  authenticate,
  upload.single('audio'),
  validateAudioUpload,
  audioController.recognize.bind(audioController)
);

audioRouter.get(
  '/history',
  authenticate,
  audioController.getHistory.bind(audioController)
);