import stock from '../index';

it('stock', async () => {
  const result = await stock({
    bvmf: 'itsa4',
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
