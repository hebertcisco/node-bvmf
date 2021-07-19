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
          .replace(/[-]/g, ""),

        yield: $('#main-2')
          .find('div:nth-child(4)')
          .find('div')
          .find('div.pb-3.pb-md-5')
          .find('div')
          .find('div:nth-child(4)')
          .find('div')
          .find('div:nth-child(1)')
          .find('strong')
          .text(),
        min2Weeks: $('#main-2')
          .find('div:nth-child(4)')
          .find('div')
          .find('div.pb-3.pb-md-5')
          .find('div')
          .find('div:nth-child(2)')
          .find('div')
          .find('div:nth-child(1)')
          .find('strong')
          .text(),
        max2Weeks: $('#main-2')
          .find('div:nth-child(4)')
          .find('div')
          .find('div.pb-3.pb-md-5')
          .find('div')
          .find('div:nth-child(3)')
          .find('div')
          .find('div:nth-child(1)')
          .find('strong')
          .text(),
        logo: $('#company-section')
          .find('div')
          .find('div.d-block.d-md-flex.mb-5.img-lazy-group')
          .find('div.company-brand.w-100.w-md-30.p-3.rounded.mb-3.mb-md-0.bg-lazy')
          .attr("data-img")?.replace(/[(+)]/g, "").slice(3, 999),
        name: $('#company-section')
          .find('div')
          .find('div.d-block.d-md-flex.mb-5.img-lazy-group')
          .find('div.company-description.w-100.w-md-70.ml-md-5')
          .find('h4')
          .find('span')
          .text(),
        site: $('#company-section')
          .find('div')
          .find('div.d-block.d-md-flex.mb-5.img-lazy-group')
          .find('div.company-description.w-100.w-md-70.ml-md-5')
          .find('span')
          .find('a')
          .attr("href"),
      })

      resolve({ result });
    } catch (err) {
      reject(err);
    }
  });
}
export default extractHTML;
