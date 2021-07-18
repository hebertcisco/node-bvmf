import stock from '../index';

it('Works', async () => {
  const result = await stock({
    bvmf: 'itsa4', max: 1
  });
  console.log(result);
  expect(result.bvmf).toBe('itsa4');
});
