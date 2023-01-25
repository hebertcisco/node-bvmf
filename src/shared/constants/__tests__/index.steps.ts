import { defineFeature, loadFeature } from 'jest-cucumber';

import { STATUS_INVEST_BASE_URL } from '../index';
import { URL_REGX } from '../urlRegex';
const feature = loadFeature('src/shared/constants/__tests__/index.feature');

defineFeature(feature, (test) => {
  test('Verify the value of the constant', ({ given, when, then }) => {
    given('the file containing the STATUS_INVEST_BASE_URL constant has been imported', () => {
      expect(STATUS_INVEST_BASE_URL).toBeDefined();
    });

    when('the constant is accessed', () => {
      expect(STATUS_INVEST_BASE_URL).toBeDefined();
    });

    then('the value of the constant should be valid URL', () => {
      expect(URL_REGX.test(STATUS_INVEST_BASE_URL)).toBe(true);
    });
  });
});
