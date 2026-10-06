import axios from 'axios';

import type { IStockExchange } from '../../contract/interfaces';
import type { IStockProvider } from './types';

const BRAPI_BASE_URL = 'https://brapi.dev/api/v2/stocks/quote';

type BrapiQuote = {
  requestedSymbol?: string;
  symbol?: string;
  data?: BrapiQuoteData;
} & BrapiQuoteData;

type BrapiQuoteData = {
  shortName?: string;
  longName?: string;
  regularMarketPrice?: number;
  regularMarketVolume?: number;
  logourl?: string;
};

const brapi: IStockProvider = {
  name: 'brapi',

  async getQuote(symbol: string): Promise<IStockExchange> {
    const headers: Record<string, string> = {};
    const token = process.env.BRAPI_API_KEY;

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await axios.get<{ results?: BrapiQuote[] }>(BRAPI_BASE_URL, {
      params: { symbols: symbol },
      headers,
      timeout: 5000,
    });
    const result = response.data.results?.[0];
    const quote = result?.data ?? result;

    if (!quote || !Number.isFinite(quote.regularMarketPrice)) {
      throw new Error('brapi returned an invalid quote');
    }

    return {
      currentValue: quote.regularMarketPrice as number,
      dailyLiquidity: quote.regularMarketVolume ?? null,
      yield: null,
      min2Weeks: null,
      max2Weeks: null,
      logo: quote.logourl ?? null,
      name: quote.longName ?? quote.shortName ?? null,
      site: null,
      provider: 'brapi',
    };
  },
};

export default brapi;
