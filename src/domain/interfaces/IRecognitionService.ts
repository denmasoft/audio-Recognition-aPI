export interface IRecognitionService {
  recognizeAudio(audioBuffer: Buffer): Promise<RecognitionResult | null>;
  generateAudioHash(buffer: Buffer): string;
}