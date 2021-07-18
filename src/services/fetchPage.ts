import iconv from 'iconv-lite';
import fetch from 'node-fetch';

async function fetchPage(bvmf: string, baseUrl: string) {
  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}/${bvmf}`)
      .then((res) => res.arrayBuffer())
      .then((arrayBuffer) => iconv.decode(Buffer.from(arrayBuffer), 'utf-8').toString())
      .then((body) => resolve(body))
      .catch((err) => reject(err));
  });
}
export default fetchPage;
