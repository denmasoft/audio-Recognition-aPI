import { IRecognitionService } from '@domain/interfaces/IRecognitionService';
import { ISearchRepository } from '@domain/interfaces/ISearchRepository';
import { ICacheService } from '@domain/interfaces/ICacheService';
import { AudioSearch } from '@domain/entities/AudioSearch';
import { AppError } from '@domain/errors/AppError';

export class AudioRecognitionService {
  constructor(
    private readonly recognitionService: IRecognitionService,
    private readonly searchRepository: ISearchRepository,
    private readonly cacheService: ICacheService
  ) {}

  async recognizeAudio(audioBuffer: Buffer, userId: string): Promise<AudioSearch> {
    const audioHash = this.recognitionService.generateAudioHash(audioBuffer);

    // Check cache first
    const cached = await this.cacheService.get<AudioSearch>(audioHash);
    if (cached) {
      return cached;
    }

    // Check database
    const existing = await this.searchRepository.findByHash(audioHash);
    if (existing) {
      await this.cacheService.set(audioHash, existing, 3600); // Cache for 1 hour
      return existing;
    }

    // Perform recognition
    const result = await this.recognitionService.recognizeAudio(audioBuffer);
    
    // Save search
    const search = new AudioSearch(
      crypto.randomUUID(),
      userId,
      audioHash,
      result,
      new Date()
    );

    await this.searchRepository.save(search);
    await this.cacheService.set(audioHash, search, 3600);

    return search;
  }

  async getUserHistory(userId: string, page: number = 1, limit: number = 20): Promise<AudioSearch[]> {
    return this.searchRepository.findByUserId(userId, page, limit);
  }
}