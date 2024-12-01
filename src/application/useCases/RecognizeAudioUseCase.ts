export class RecognizeAudioUseCase {
  constructor(
    private readonly audioRecognitionService: AudioRecognitionService
  ) {}

  async execute(params: {
    audioBuffer: Buffer;
    userId: string;
  }): Promise<AudioSearch> {
    const { audioBuffer, userId } = params;
    return this.audioRecognitionService.recognizeAudio(audioBuffer, userId);
  }
}