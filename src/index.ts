import slugify from 'slugify';

import _throw from './shared/utils/_throw';
import type { IOptions } from './contract/interfaces';
import { getStockQuote } from './core/services/getStockQuote';

export default async (options: IOptions) => {
  if (options === undefined || options.bvmf === undefined) {
    _throw('A bvmf must be defined');
  }

  const bvmf = slugify(`${options.bvmf}`, {
    replacement: '_',
    remove: /[*+~.()'"!:@]/g,
    lower: true,
  });
  const quote = await getStockQuote(bvmf, options.providers);

  return { total: 1, bvmf, stock: [quote] };
};
