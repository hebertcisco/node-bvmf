import type { ProviderName } from '../../contract/interfaces';
import brapi from './brapi';
import statusInvest from './statusInvest';
import type { IStockProvider } from './types';
import yahoo from './yahoo';

const providers: Record<ProviderName, IStockProvider> = {
  statusinvest: statusInvest,
  brapi,
  yahoo,
};

export function getProviders(order?: ProviderName[]): IStockProvider[] {
  const names = order?.length ? order : ['statusinvest', 'brapi', 'yahoo'];
  return names.map((name) => {
    const provider = providers[name];

    if (!provider) {
      throw new Error(`Unknown stock quote provider: ${name}`);
    }

    return provider;
  });
}
