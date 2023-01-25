import { defineFeature, loadFeature } from 'jest-cucumber';
import axios from 'axios';
import htmlLoader from '../../testing/mocks/html/html-loader';
import stock from '../index';
import extractHTML from '../shared/utils/extractHTML';

const feature = loadFeature('src/stock.feature');

defineFeature(feature, (test) => {
  let bvmf: string;
  let htmlContent: any;
  let body: any;
  let result: any;

  beforeEach(() => {
    bvmf = 'some-bvmf';
    htmlContent = htmlLoader({
      site: 'statusinvest',
      source: 'acoes/itsa4',
    });
    body = extractHTML(htmlContent);
  });

  test('Retrieving stock data', ({ given, when, then }) => {
    given('I want to retrieve stock data', () => {
      bvmf = 'some-bvmf';
    });

    when('I call the stock function with the bvmf code', async () => {
      jest.spyOn(axios, 'get').mockResolvedValue({ data: body });
      result = await stock({
        bvmf: bvmf,
        max: 1,
      });
    });

    then('I should receive an object with the stock data', () => {
      const { stock: stockData } = result;
      const resultStock = stockData[0];
      expect(resultStock).toHaveProperty('currentValue');
      expect(resultStock).toHaveProperty('dailyLiquidity');
      expect(resultStock).toHaveProperty('yield');
      expect(resultStock).toHaveProperty('min2Weeks');
      expect(resultStock).toHaveProperty('max2Weeks');
      expect(resultStock).toHaveProperty('logo');
      expect(resultStock).toHaveProperty('name');
      expect(resultStock).toHaveProperty('site');
    });
  });
});
