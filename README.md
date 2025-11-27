# DEPRECATED 🚨

[![Unmaintained](https://img.shields.io/badge/status-unmaintained-red)](https://shields.io/)

> This repository has been archived and is now in a read-only state.
> No further updates or maintenance will be provided here.
>
> All relevant content and active development have been transferred to **TrustVC**.
>
> Please visit the canonical repository for the latest changes and contributions:
> [https://github.com/trustvc/trustvc](https://github.com/trustvc/trustvc)
>
> Thank you for your interest and support.

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
