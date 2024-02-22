# tradetrust-utils

This is a repository that houses shared project logic between tradetrust website and tradetrust document creator.

Currently, this is still an experiment to see whether this structure of sharing logic between the 2 repos is sustainable.

We will monitor whether the dependencies will get out of hand.

Before any commits here, please ask the maintainers (TradeTrust team) first.

### Prerequisite

- Node (optionally, use [nvm](https://github.com/nvm-sh/nvm) to manage node version)
- Node version 18 onwards.

### Direct import

If the consuming application does not support treeshaking, you should do direct import instead. Example:

```
import { CHAIN_ID } from "@tradetrust-tt/tradetrust-utils/constants/supportedChains";
```
