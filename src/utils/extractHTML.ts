import cheerio from 'cheerio';
import { IStockExchange } from '../typescript';

async function extractHTML(htmlContent: string) {
  return new Promise(async (resolve, reject) => {
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
      });
      resolve({ result });
    } catch (err) {
      reject(err);
    }
  });
}
export default extractHTML;
