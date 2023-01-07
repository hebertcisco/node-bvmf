import axios from 'axios';
import fetchPage from '../fetchPage';

describe('fetchPage', () => {
  it('should return the body of the response', async () => {
    const bvmf = 'some-bvmf';
    const baseUrl = 'https://some-url.com';
    const body = '<html>Some page</html>';

    jest.spyOn(axios, 'get').mockResolvedValue({ data: body });

    const result = await fetchPage(bvmf, baseUrl);
    expect(result).toEqual(body);
  });
});
