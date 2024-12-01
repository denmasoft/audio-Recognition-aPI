export class AudioSearch {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly audioHash: string,
    public readonly result: RecognitionResult | null,
    public readonly createdAt: Date
  ) {}
}
