import axios from 'axios';
import htmlLoader from '../../testing/mocks/html/html-loader';
import stock from '../index';
import extractHTML from '../shared/utils/extractHTML';

describe('stock', () => {
  it('stock', async () => {
    const bvmf = 'some-bvmf';
 
    const htmlContent = htmlLoader({
      site: 'statusinvest',
      source: 'acoes/itsa4',
    });
    
    const body = await extractHTML(htmlContent);

    jest.spyOn(axios, 'get').mockResolvedValue({ data: body });

    const result = await stock({
      bvmf:bvmf,
      max: 1,
    });
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