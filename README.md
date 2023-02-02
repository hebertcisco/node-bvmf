<p align="center">
 <img width="100px" src="https://raw.githubusercontent.com/hebertcisco/node-bvmf/main/.github/images/favicon512x512-bvmf.png" align="center" alt=":package: bvmf" />
 <h2 align="center">:package: bvmf</h2>
 <p align="center"A web scraping library for extracting real-time stock information from the Brazilian stock exchange using Node.js.</p>
</p>

  <p align="center">
 <a href="https://github.com/hebertcisco/node-bvmf/issues">
      <img alt="Issues" src="https://img.shields.io/github/issues/hebertcisco/node-bvmf?style=flat&color=336791" />
    </a>
    <a href="https://github.com/hebertcisco/node-bvmf/pulls">
      <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/hebertcisco/node-bvmf?style=flat&color=336791" />
    </a>
     <a href="https://github.com/hebertcisco/node-bvmf">
      <img alt="GitHub Downloads" src="https://img.shields.io/npm/dw/node-bvmf?style=flat&color=336791" />
    </a>
    <a href="https://github.com/hebertcisco/node-bvmf">
      <img alt="GitHub Total Downloads" src="https://img.shields.io/npm/dt/node-bvmf?color=336791&label=Total%20downloads" />
    </a>
    <a href="https://github.com/hebertcisco/node-bvmf">
      <img alt="GitHub release" src="https://img.shields.io/github/release/hebertcisco/node-bvmf.svg" />
    </a>
    <br />
    <br />
  <a href="https://github.com/hebertcisco/node-bvmf/issues/new/choose">Report Bug</a>
  <a href="https://github.com/hebertcisco/node-bvmf/issues/new/choose">Request Feature</a>
  </p>

<p align="center">Did you like the project? Please, considerate <a href="https://www.buymeacoffee.com/hebertcisco">a donation</a> to help improve!</p>

<p align="center"><strong>A web scraping library for extracting real-time stock information from the Brazilian stock exchange using Node.js.</strong>✨</p>

> Getting started

[![Node.js build and publish package](https://github.com/hebertcisco/node-bvmf/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/hebertcisco/node-bvmf/actions/workflows/npm-publish.yml)
[![Running Code Coverage](https://github.com/hebertcisco/node-bvmf/actions/workflows/coverage.yml/badge.svg)](https://github.com/hebertcisco/node-bvmf/actions/workflows/coverage.yml)

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/hebertcisco/node-bvmf/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/hebertcisco/node-bvmf/tree/main) [![codecov](https://codecov.io/gh/hebertcisco/node-bvmf/branch/main/graph/badge.svg?token=SLBRQS3CWJ)](https://codecov.io/gh/hebertcisco/node-bvmf)

## Installation

> Clone this repository: `git clone https://github.com/hebertcisco/node-bvmf`

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

I used  [jest-cucumber](https://github.com/bencompton/jest-cucumber)

Example:

```feature
Feature: Retrieve stock information

Scenario: Retrieving stock data
    Given I want to retrieve stock data
    When I call the stock function with the bvmf code
    Then I should receive an object with the stock data
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](issues).

## Show your support

Give a ⭐️ if this project helped you!

Or buy me a coffee 🙌🏾

<a href="https://www.buymeacoffee.com/hebertcisco">
    <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=hebertcisco&button_colour=FFDD00&font_colour=000000&font_family=Inter&outline_colour=000000&coffee_colour=ffffff" />
</a>

**BTC WALLET**: `3P4oVEdSP8CPdFZZwS2dboRyLFXLSTE7Gq`

## 📝 License

Copyright © 2023 [Hebert F Barros](https://github.com/hebertcisco).<br />
This project is [MIT](LICENSE) licensed.
