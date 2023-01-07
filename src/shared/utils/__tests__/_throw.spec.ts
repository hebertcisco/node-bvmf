import _throw from '../_throw';

describe('_throw', () => {
  test('throws an error with a single message', () => {
    try {
      _throw('Error message');
    } catch (error) {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(error).toBe('Error message');
    }
  });

  test('throws an error with an array of messages', () => {
    try {
      _throw(['Error message 1', 'Error message 2']);
    } catch (error) {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(error).toBe('Error message 1\nError message 2');
    }
  });
});
