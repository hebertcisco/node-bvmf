export interface IStockExchange {
  currentValue: string;
  dailyLiquidity: string;
}
export interface IResult {
  result: IStockExchange[];
  next: boolean;
}
export interface IOptions {
  bvmf: string;
  max: number;
}
