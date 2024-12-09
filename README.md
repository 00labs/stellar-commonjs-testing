## Running this project

1. `yarn`
2. `yarn start`

Our package bindings and SDK are in this repo: https://github.com/00labs/huma-soroban-sdk

## Error

```
yarn run v1.22.22
$ ts-node src/index.ts
/Users/username/Dev/huma-stellar-testing/node_modules/@huma-finance/soroban-credit-manager/dist/index.js:1
import { Buffer } from "buffer";
^^^^^^

SyntaxError: Cannot use import statement outside a module
    at internalCompileFunction (node:internal/vm:73:18)
    at wrapSafe (node:internal/modules/cjs/loader:1274:20)
    at Module._compile (node:internal/modules/cjs/loader:1320:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1414:10)
    at Object.require.extensions.<computed> [as .js] (/Users/username/Dev/huma-stellar-testing/node_modules/ts-node/src/index.ts:1608:43)
    at Module.load (node:internal/modules/cjs/loader:1197:32)
    at Function.Module._load (node:internal/modules/cjs/loader:1013:12)
    at Module.require (node:internal/modules/cjs/loader:1225:19)
    at require (node:internal/modules/helpers:177:18)
    at Object.<anonymous> (/Users/username/Dev/huma-stellar-testing/node_modules/@huma-finance/soroban-sdk/dist/cjs/utils/client.js:4:34)
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```
