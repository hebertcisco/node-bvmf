export interface IStockExchange {
  currentValue: string;
  dailyLiquidity: string;
  yield: string;
  min2Weeks: string;
  max2Weeks: string;
  logo: string | any;
  name: string | any;
  site: string | any;
}
export interface IResult {
  result: IStockExchange[];
  next: boolean;
}
export interface IOptions {
  bvmf: string;
  max: number;
}
