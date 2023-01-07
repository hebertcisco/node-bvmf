import slugify from 'slugify';

import fetchPage from './core/services/fetchPage';
import extractHTML from './shared/utils/extractHTML';
import _throw from './shared/utils/_throw';

import { STATUS_INVEST_BASE_URL } from './shared/constants';

import type { IOptions, IStockExchange } from './contract/interfaces';

export default async (options: IOptions) => {
  if (options === undefined || options.bvmf === undefined) {
    _throw('A bvmf must be defined');
  }

  const bvmf: string = slugify(`${options.bvmf}`, {
    replacement: '_',
    remove: /[*+~.()'"!:@]/g,
    lower: true,
  });

  const stock: IStockExchange[] = [];

  const contentPage: string = await fetchPage(bvmf, `${STATUS_INVEST_BASE_URL}/acoes`);
  const result: IStockExchange[] = await extractHTML(contentPage);

  for await (const item of result) {
    stock.push(item);
  }

  return { total: stock.length, bvmf, stock };
};
