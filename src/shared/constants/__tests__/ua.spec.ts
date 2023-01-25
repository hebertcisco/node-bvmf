import userAgent from '../ua';

describe('userAgent', () => {
  it('should return a string that matches the expected user agent format', () => {
    const result = userAgent();
    expect(typeof result).toBe('string');
    expect(result).toMatch(/Mozilla\/5.0 \(Windows NT 10.0; Win64; x64\) AppleWebKit\/537.36 \(KHTML, like Gecko\) Chrome\/108.0.0.0 Safari\/537.36/);
  });
});
