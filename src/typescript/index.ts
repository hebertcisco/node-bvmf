export interface IStockExchange {
  currentValue: string;
  dailyLiquidity: string;
  yield: string;
  min2Weeks: string;
  max2Weeks: string;
  logo?: string;
  name?: string;
  site?: string;
}
export interface IResult {
  result: IStockExchange[];
  next: boolean;
}
export interface IOptions {
  bvmf: string;
  max?: number | 1;
}
