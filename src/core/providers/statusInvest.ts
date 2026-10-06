import slugify from 'slugify';

import extractHTML from '../../shared/utils/extractHTML';
import extractParsedValues from '../../shared/utils/extractParsedValues';
import fetchPage from '../services/fetchPage';
import { STATUS_INVEST_BASE_URL } from '../../shared/constants';
import type { IStockExchange } from '../../contract/interfaces';
import type { IStockProvider } from './types';

const statusInvest: IStockProvider = {
  name: 'statusinvest',

  async getQuote(symbol: string): Promise<IStockExchange> {
    const slug = slugify(symbol, {
      replacement: '_',
      remove: /[*+~.()'"!:@]/g,
      lower: true,
    });
    const page = await fetchPage(slug, `${STATUS_INVEST_BASE_URL}/acoes`);
    const parsed = await extractParsedValues(await extractHTML(page));
    const quote = parsed[0];

    if (!quote || !Number.isFinite(quote.currentValue)) {
      throw new Error('StatusInvest returned an invalid quote');
    }

    return { ...quote, provider: 'statusinvest' };
  },
};

export default statusInvest;
