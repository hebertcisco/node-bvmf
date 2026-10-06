# Contributing to bvmf

Thank you for helping improve bvmf. Contributions of code, tests, documentation, and issue reports are welcome.

## Before you start

1. Search existing issues and pull requests to avoid duplicate work.
2. For a significant change, open an issue first so the design can be discussed.
3. Keep changes focused and include tests for behavior you change.

## Local development

```bash
npm ci
npm test
npm run lint
npm run build
```

Please do not commit generated `lib/` output or dependency directories. The project uses the committed `package-lock.json`; use `npm ci` for reproducible installs and update the lockfile whenever dependencies change.

## Pull requests

- Explain the problem and the proposed solution.
- Include relevant tests and documentation updates.
- Keep the public API and error behavior backwards compatible unless the change is explicitly documented as breaking.
- Use clear, focused commits and a descriptive pull request title.

By contributing, you agree that your work is provided under the project's [MIT License](LICENSE.md).
