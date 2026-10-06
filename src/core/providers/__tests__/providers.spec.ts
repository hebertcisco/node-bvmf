import axios from 'axios';

import stock from '../../../index';

describe('stock providers', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('uses brapi when StatusInvest is unavailable', async () => {
    jest
      .spyOn(axios, 'get')
      .mockRejectedValueOnce(new Error('StatusInvest unavailable'))
      .mockResolvedValueOnce({
        data: {
          results: [
            {
              symbol: 'PETR4',
              data: {
                regularMarketPrice: 38.5,
                regularMarketVolume: 1000,
                shortName: 'PETROBRAS PN',
              },
            },
          ],
        },
      });

    const result = await stock({ bvmf: 'PETR4' });

    expect(result.stock[0]).toMatchObject({
      currentValue: 38.5,
      dailyLiquidity: 1000,
      name: 'PETROBRAS PN',
      provider: 'brapi',
      yield: null,
      min2Weeks: null,
      max2Weeks: null,
    });
  });

  it('allows callers to select a provider explicitly', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce({
      data: {
        chart: {
          result: [{ meta: { regularMarketPrice: 39.1, regularMarketVolume: 2000 } }],
        },
      },
    });

    const result = await stock({ bvmf: 'PETR4', providers: ['yahoo'] });

    expect(result.stock[0]).toMatchObject({
      currentValue: 39.1,
      dailyLiquidity: 2000,
      provider: 'yahoo',
    });
  });
});
