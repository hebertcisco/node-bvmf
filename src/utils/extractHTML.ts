import cheerio from 'cheerio';
import { IStockExchange } from '../typescript';

async function extractHTML(htmlContent: string) {
  return new Promise((resolve, reject) => {
    try {
      const result: IStockExchange[] = [];
      const $ = cheerio.load(htmlContent);
      result.push({
        currentValue: $('#main-2')
          .find('.container')
          .find('.paper')
          .find('.pb-3')
          .find('.top-info')
          .find('.special')
          .find('.d-md-inline-block')
          .find('div')
          .find('.value')
          .text(),
        dailyLiquidity: $('#main-2')
          .find('div:nth-child(4)')
          .find('div')
          .find('div:nth-child(4)')
          .find('div')
          .find('div')
          .find('div:nth-child(3)')
          .find('div')
          .find('div')
          .find('div')
          .find('strong')
          .text()
          .replace(/[-]/g, "")
      });
      resolve({ result });
    } catch (err) {
      reject(err);
    }
  });
}
export default extractHTML;
