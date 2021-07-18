import { BASE_URL } from './constants';
import fetchPage from './services/fetchPage';
import { IOptions, IStockExchange, IResult } from './typescript';
import extractHTML from './utils/extractHTML';
import _throw from './utils/_throw';
import slugify from 'slugify';

export default async (options: IOptions) => {
  if (options === undefined || options.bvmf === undefined) {
    _throw('A bvmf must be defined');
  }

  const bvmf = slugify(`${options.bvmf}`, {
    replacement: '_',
    remove: /[*+~.()'"!:@]/g,
    lower: true,
  });

  let keepGoing = true;
  let current = 1;

  let stock: IStockExchange[] = [];

  while (keepGoing) {
    const contentPage: string | any = await fetchPage(bvmf, BASE_URL);
    const result: IResult | any = await extractHTML(contentPage);

    stock.push(...result.result);

    if (options.max !== undefined && stock.length > options.max) {
      stock = stock.slice(0, options.max);
      keepGoing = false;
    }

    if (result.next === false) {
      keepGoing = false;
    }

    current = current + 1;
  }

  return { total: stock.length, bvmf, stock };
};
