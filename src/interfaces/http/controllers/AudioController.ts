import { Request, Response } from 'express';
import { RecognizeAudioUseCase } from '@application/useCases/RecognizeAudioUseCase';
import { AudioRecognitionService } from '@application/services/AudioRecognitionService';

export class AudioController {
  constructor(
    private readonly recognizeAudioUseCase: RecognizeAudioUseCase,
    private readonly audioRecognitionService: AudioRecognitionService
  ) {}

  async recognize(req: Request, res: Response): Promise<void> {
    const result = await this.recognizeAudioUseCase.execute({
      audioBuffer: req.file.buffer,
      userId: req.user.id
    });

    res.json(result);
  }

  async getHistory(req: Request, res: Response): Promise<void> {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 20;

    const history = await this.audioRecognitionService.getUserHistory(
      req.user.id,
      page,
      limit
    );

    res.json(history);
  }
}