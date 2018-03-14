#thinglator-interface-fetch

An interface that allows Thinglator to talk to http devices using the fetch library

## Requirements

* node.js 8.9+
* Thinglator - https://github.com/richardwillars/thinglator

## Installation for usage

Navigate to the root of your Thinglator installation and run:

> yarn add thinglator-interface-fetch

> yarn dev

# Installation for development

Navigate to the root of the thinglator-interface-fetch project and run:

> yarn install

> yarn link

Navigate to the root of your Thinglator installation and run:

> yarn add thinglator-interface-fetch

Go to the thinglator project and run:

> yarn link thinglator-interface-fetch

This will point thinglator/node_modules/thinglator-interface-fetch to the directory where you just installed thinglator-interface-fetch. This makes it easier for development and testing of the module.

> yarn dev

## Test

> yarn test
> or
> yarn test:watch
