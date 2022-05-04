<p align="center">
 <img width="100px" src="https://raw.githubusercontent.com/hebertcisco/bvmf/main/.github/images/favicon512x512-bvmf.png" align="center" alt=":package: bvmf" />
 <h2 align="center">:package: bvmf</h2>
 <p align="center">Promise-based abstraction integrated with statusinvest.com.br for stock quotes</p>
</p>

  <p align="center">
 <a href="https://github.com/hebertcisco/bvmf/issues">
      <img alt="Issues" src="https://img.shields.io/github/issues/hebertcisco/bvmf?style=flat&color=336791" />
    </a>
    <a href="https://github.com/hebertcisco/bvmf/pulls">
      <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/hebertcisco/bvmf?style=flat&color=336791" />
    </a>
     <a href="https://github.com/hebertcisco/bvmf">
      <img alt="GitHub Downloads" src="https://img.shields.io/npm/dw/bvmf?style=flat&color=336791" />
    </a>
    <a href="https://github.com/hebertcisco/bvmf">
      <img alt="GitHub Total Downloads" src="https://img.shields.io/npm/dt/bvmf?color=336791&label=Total%20downloads" />
    </a>
    <a href="https://github.com/hebertcisco/bvmf">
      <img alt="GitHub release" src="https://img.shields.io/github/release/hebertcisco/bvmf.svg" />
    </a>
    <br />
    <br />
  <a href="https://github.com/hebertcisco/bvmf/issues/new/choose">Report Bug</a>
  <a href="https://github.com/hebertcisco/bvmf/issues/new/choose">Request Feature</a>
  </p>

<p align="center">Did you like the project? Please, considerate <a href="https://www.buymeacoffee.com/hebertcisco">a donation</a> to help improve!</p>

<p align="center"><strong>Promise-based abstraction integrated with statusinvest.com.br for stock quotes</strong>✨</p>


# Getting started

## Installation

> Clone this repository: `git clone https://github.com/hebertcisco/bvmf`

### Open the directory and run the script line:

```bash
cd bvmf && npm i
```

### Usage

#### Import

```ts
//using ES6
import bvmf from 'bvmf';
//or using ES5
const bvmf  = require("bvmf")
```

#### Using

```ts
//using ES6
import bvmf from 'bvmf';

async function returnQuote(bvmf) {
    const result = await bvmf(
      {
        bvmf: bvmf
      });
    return(result);
 }
 try{
  console.log(returnQuote("itsa4"));
 }catch(err){
  console.error(err);
 }
```

#### Returns

```json
{
  "bvmf": "itsa4",
  "total": 1,
  "stock": [
    {
      "currentValue": "11,11",
      "dailyLiquidity": "391.965.857,19",
      "yield": "2,67",
      "min2Weeks": "8,57",
      "max2Weeks": "12,05",
      "logo": "https://cdn-statsinvest.azeedge.net/img/company/cove/345.jpg",
      "name": "ITAUSA INVESTIMENTOS ITAU S.A.",
      "site": "http://www.itausa.com.br"
    }
  ]
}
```

#### Testing

```ts
import bvmf from 'bvmf';

it('Works", async () => {
  const result = await bvmf({
    bvmf "itsa4", max: 1
  });
  console.log(result);
  expect(result.bvmf).toBe('itsa4');
});

```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](issues).

## Show your support

Give a ⭐️ if this project helped you!

Or buy me a coffee 🙌🏾

<a href="https://www.buymeacoffee.com/hebertcisco">
    <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=hebertcisco&button_colour=FFDD00&font_colour=000000&font_family=Inter&outline_colour=000000&coffee_colour=ffffff" />
</a>

## 📝 License

Copyright © 2022 [Hebert F Barros](https://github.com/hebertcisco).<br />
This project is [MIT](LICENSE) licensed.
