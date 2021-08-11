import stock from '../index';

it('Works', async () => {
  const result = await stock({
    bvmf: 'itsa4', max: 1
  });
  console.log(result);
  expect(result.stock[0].name).toBe('ITAUSA INVESTIMENTOS ITAU S.A.');
});
