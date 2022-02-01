export default function _throw(message: string | string[]) {
  throw message instanceof Array ? message.join('\n') : message;
}
