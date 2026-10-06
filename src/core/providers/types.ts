import type { IStockExchange, ProviderName } from '../../contract/interfaces';

export interface IStockProvider {
  readonly name: ProviderName;
  getQuote(symbol: string): Promise<IStockExchange>;
}
