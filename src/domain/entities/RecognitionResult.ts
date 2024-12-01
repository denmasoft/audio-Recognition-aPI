export class RecognitionResult {
  constructor(
    public readonly artist: string,
    public readonly title: string,
    public readonly album: string,
    public readonly releaseDate: string,
    public readonly label: string,
    public readonly timecode: string,
    public readonly songLink?: string
  ) {}
}