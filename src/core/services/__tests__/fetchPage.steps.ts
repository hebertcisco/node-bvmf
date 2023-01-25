import { loadFeature, defineFeature } from 'jest-cucumber';
import axios from 'axios';
import fetchPage from '../fetchPage';

const feature = loadFeature('src/core/services/__tests__/fetchPage.feature');

defineFeature(feature, (test) => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('fetching a page', ({ given, when, then }) => {
    let result: string;
    const bvmf = 'some-bvmf';
    const baseUrl = 'https://some-url.com';
    const body = '<html>Some page</html>';

    given('I want to fetch a page', () => {});

    when('I make a request to the page', async () => {
      jest.spyOn(axios, 'get').mockResolvedValue({ data: body });
      result = await fetchPage(bvmf, baseUrl);
    });

    then('I should receive the body of the response', () => {
      expect(result).toEqual(body);
    });
  });
});
