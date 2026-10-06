import type { IStockExchange, ProviderName } from '../../contract/interfaces';
import { getProviders } from '../providers';

export async function getStockQuote(symbol: string, order?: ProviderName[]): Promise<IStockExchange> {
  const providerOrder = getProviders(order);
  const errors: string[] = [];

  for (const provider of providerOrder) {
    try {
      return await provider.getQuote(symbol);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'unknown error';
      errors.push(`${provider.name}: ${message}`);
    }
  }

  throw new Error(`All stock quote providers failed (${errors.join('; ')})`);
}
