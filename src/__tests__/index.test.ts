import stock from '../index';

it('stock', async () => {
  const result = await stock({
    bvmf: 'itsa4',
    max: 1,
  });
  expect(result.stock[0].name).toBe('ITAUSA INVESTIMENTOS ITAU S.A.');
});
