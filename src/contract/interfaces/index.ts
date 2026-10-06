export interface IStockExchange {
  currentValue: number;
  dailyLiquidity: number | null;
  yield: number | null;
  min2Weeks: number | null;
  max2Weeks: number | null;
  logo: string | null;
  name: string | null;
  site: string | null;
  provider?: string;
}
export interface IResult {
  result: IStockExchange[];
  next: boolean;
}
export interface IOptions {
  bvmf: string;
  max?: number | 1;
  providers?: ProviderName[];
}

export type ProviderName = 'statusinvest' | 'brapi' | 'yahoo';
