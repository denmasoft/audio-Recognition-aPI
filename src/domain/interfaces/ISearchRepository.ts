export interface ISearchRepository {
  save(search: AudioSearch): Promise<void>;
  findByHash(hash: string): Promise<AudioSearch | null>;
  findByUserId(userId: string, page: number, limit: number): Promise<AudioSearch[]>;
}