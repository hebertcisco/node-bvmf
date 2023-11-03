export interface IStockExchange {
  currentValue: number;
  dailyLiquidity: number;
  yield: number;
  min2Weeks: number;
  max2Weeks: number;
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
