import axios from 'axios';

import type { IStockExchange } from '../../contract/interfaces';
import type { IStockProvider } from './types';

const YAHOO_CHART_URL = 'https://query1.finance.yahoo.com/v8/finance/chart';

type YahooChartResponse = {
  chart?: {
    result?: Array<{
      meta?: {
        regularMarketPrice?: number;
        regularMarketVolume?: number;
      };
    }>;
  };
};

const yahoo: IStockProvider = {
  name: 'yahoo',

  async getQuote(symbol: string): Promise<IStockExchange> {
    const response = await axios.get<YahooChartResponse>(
      `${YAHOO_CHART_URL}/${encodeURIComponent(symbol)}.SA`,
      {
        params: { interval: '1d', range: '1d' },
        timeout: 5000,
      },
    );
    const meta = response.data.chart?.result?.[0]?.meta;

    if (!meta || !Number.isFinite(meta.regularMarketPrice)) {
      throw new Error('Yahoo Finance returned an invalid quote');
    }

    return {
      currentValue: meta.regularMarketPrice as number,
      dailyLiquidity: meta.regularMarketVolume ?? null,
      yield: null,
      min2Weeks: null,
      max2Weeks: null,
      logo: null,
      name: null,
      site: null,
      provider: 'yahoo',
    };
  },
};

export default yahoo;
