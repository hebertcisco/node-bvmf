# bvmf

[![CI and coverage](https://github.com/hebertcisco/node-bvmf/actions/workflows/coverage.yml/badge.svg)](https://github.com/hebertcisco/node-bvmf/actions/workflows/coverage.yml)
[![npm version](https://img.shields.io/npm/v/bvmf)](https://www.npmjs.com/package/bvmf)
[![npm downloads](https://img.shields.io/npm/dm/bvmf)](https://www.npmjs.com/package/bvmf)
[![License](https://img.shields.io/github/license/hebertcisco/node-bvmf)](LICENSE.md)

`bvmf` is an open-source TypeScript library for retrieving stock quotes listed in Brazil. It fetches the public StatusInvest page for a ticker and returns a typed, promise-based result for Node.js applications.

## Installation

```bash
npm install bvmf
```

Node.js 18.17 or newer is supported.

## Usage

```ts
import bvmf from 'bvmf';

const quote = await bvmf({ bvmf: 'itsa4' });

console.log(quote.stock[0]);
```

By default, providers are tried in this order: StatusInvest, brapi.dev, and Yahoo Finance. A provider is considered successful only when it returns a valid current price; transport errors and malformed responses automatically move to the next provider.

To select a provider explicitly, pass its name:

```ts
const quote = await bvmf({
  bvmf: 'itsa4',
  providers: ['brapi']
});
```

The brapi.dev provider works without a token for supported symbols. For broader coverage, set `BRAPI_API_KEY` in the server environment. Never expose this value in client-side code.

The result has the following shape. Fields that a provider does not publish are returned as `null`, and `provider` identifies the source used:

```json
{
  "total": 1,
  "bvmf": "itsa4",
  "stock": [
    {
      "provider": "statusinvest",
      "currentValue": 11.11,
      "dailyLiquidity": 391.965,
      "yield": 2.67,
      "min2Weeks": 8.57,
      "max2Weeks": 12.05,
      "logo": "https://cdn-statsinvest.azeedge.net/img/company/cove/345.jpg",
      "name": "ITAUSA INVESTIMENTOS ITAU S.A.",
      "site": "https://www.itausa.com.br"
    }
  ]
}
```

## Development

```bash
npm ci
npm test
npm run lint
npm run build
```

The test suite uses Jest and jest-cucumber. Tests mock remote responses, so normal development and CI runs do not depend on a live StatusInvest request.

## Responsible use

This package reads publicly available web pages. Respect the source website's terms, robots policy, rate limits, and applicable laws. The returned information is provided for informational purposes only and is not financial advice. The maintainers do not guarantee availability, completeness, or accuracy of third-party data.

## Contributing

Bug reports, feature requests, documentation improvements, and pull requests are welcome. Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening an issue or pull request. Security reports should follow [SECURITY.md](SECURITY.md).

## License

This project is licensed under the [MIT License](LICENSE.md).
