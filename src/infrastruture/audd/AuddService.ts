import axios from 'axios';
import FormData from 'form-data';
import { IRecognitionService } from '@domain/interfaces/IRecognitionService';
import { RecognitionResult } from '@domain/entities/RecognitionResult';
import { createHash } from 'crypto';

export class AuddService implements IRecognitionService {
  constructor(
    private readonly apiKey: string,
    private readonly apiUrl: string = 'https://api.audd.io/'
  ) {}

  async recognizeAudio(audioBuffer: Buffer): Promise<RecognitionResult | null> {
    const formData = new FormData();
    formData.append('api_token', this.apiKey);
    formData.append('file', audioBuffer, 'audio.mp3');
    formData.append('return', 'spotify,apple_music');

    try {
      const response = await axios.post(this.apiUrl, formData, {
        headers: formData.getHeaders(),
        timeout: 10000
      });

      if (response.data.status === 'error') {
        throw new Error(response.data.error.message);
      }

      return response.data.result ? this.mapToResult(response.data.result) : null;
    } catch (error) {
      throw new Error(`Recognition failed: ${error.message}`);
    }
  }

  generateAudioHash(buffer: Buffer): string {
    return createHash('sha256').update(buffer).digest('hex');
  }

  private mapToResult(data: any): RecognitionResult {
    return new RecognitionResult(
      data.artist,
      data.title,
      data.album,
      data.release_date,
      data.label,
      data.timecode,
      data.spotify?.external_urls?.spotify || data.apple_music?.url
    );
  }
}