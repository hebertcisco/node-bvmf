import iconv from 'iconv-lite';
import axios from 'axios';
import randomUseragent from 'random-useragent';
import ua from '../../shared/constants/ua';

async function fetchPage(bvmf: string, baseUrl: string): Promise<string> {
  const ENCODING = 'utf-8';
  const UA = randomUseragent.getRandom();

  const response = await axios.get(`${baseUrl}/${bvmf}`, {
    responseType: 'arraybuffer',
    headers: {
      'User-Agent': UA || ua(),
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  });
  const arrayBuffer = Buffer.from(response.data, ENCODING);
  const stringBody = iconv.decode(arrayBuffer, ENCODING);

  if (!stringBody) {
    throw new Error('No body');
  }
  return stringBody;
}
export default fetchPage;
