import { youtubeLinkParser } from './youtubeLinks.utils';

describe('youtubeLinkParser', () => {
  it('should return the video ID', () => {
    const result = youtubeLinkParser(
      'https://www.youtube.com/embed/UJfpqSj7cCs?t=10?rel=0"'
    );
    const expected = 'UJfpqSj7cCs';
    expect(result).toBe(expected);
  });
  it('should return undefined', () => {
    const result = youtubeLinkParser(
      'https://www.dailymotion.com/video/x48azut'
    );
    const expected = undefined;
    expect(result).toBe(expected);
  });
});
