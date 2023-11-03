import extractHTML from '../extractHTML';
import htmlLoader from '../../../../testing/mocks/html/html-loader';

describe('extractHTML', () => {
  test('extracts stock data from HTML', async () => {
    const htmlContent = htmlLoader({
      site: 'statusinvest',
      source: 'acoes/itsa4',
    });
    const result = await extractHTML(htmlContent);

    for (const stock of result) {
      expect(stock).toHaveProperty('currentValue');
      expect(stock).toHaveProperty('dailyLiquidity');
      expect(stock).toHaveProperty('logo');
      expect(stock).toHaveProperty('max2Weeks');
      expect(stock).toHaveProperty('min2Weeks');
      expect(stock).toHaveProperty('name');
      expect(stock).toHaveProperty('site');
      expect(stock).toHaveProperty('yield');
    }
  });
});
