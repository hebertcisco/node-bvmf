import type { IStockExchange } from '../../contract/interfaces';

async function extractParsedValues(htmlContent: Array<object>): Promise<IStockExchange[]> {
  const result: IStockExchange[] = [];

  for await (const item of htmlContent) {
    const currentValue = Number(item['currentValue'].replace(/[,]/g, '.'));
    const dailyLiquidity = Number(item['dailyLiquidity'].replace(/[,]/g, '.'));
    const _yield = Number(item['yield'].replace(/[,]/g, '.'));
    const min2Weeks = Number(item['min2Weeks'].replace(/[,]/g, '.'));
    const max2Weeks = Number(item['max2Weeks'].replace(/[,]/g, '.'));
    const logo = item['logo'];
    const name = item['name'];
    const site = item['site'];

    result.push({
      currentValue,
      dailyLiquidity,
      yield: _yield,
      min2Weeks,
      max2Weeks,
      logo,
      name,
      site,
    });
  }
  return result;
}
export default extractParsedValues;
