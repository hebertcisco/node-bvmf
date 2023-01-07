import fs from 'fs';
import path from 'path';
import type { HtmlLoaderArgs } from '../../../src/contract/types';

export default function htmlLoader(args: HtmlLoaderArgs): string {
  const currentDir = path.resolve(__dirname, '..');
  const source = `${currentDir}/html/${args.site}/${args.source}`;
  const fileRawContent = fs.readFileSync(source, 'base64');
  const fileContent = Buffer.from(fileRawContent, 'base64');
  const fileContentString = Buffer.from(fileContent.toString(), 'base64');
  return fileContentString.toString('utf-8');
}
