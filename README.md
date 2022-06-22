# module-federation-example

[![node][node-image]][node-url]
[![npm][npm-image]][npm-url]
[![webpack][webpack-image]][webpack-url]

[node-image]: https://img.shields.io/badge/node.js-%3e=14.x-blue.svg
[node-url]: https://nodejs.org/
[npm-image]: https://img.shields.io/badge/npm-%3e=18.x-blue.svg
[npm-url]: https://npmjs.com/
[webpack-image]: https://img.shields.io/badge/webpack-%3e=5.x-blue.svg
[webpack-url]: https://webpack.js.org/

- example for webpack 5's **ModuleFederation**

## Architecture

| Module        | Description            | host                  |
| ------------- | ---------------------- | --------------------- |
| **core**      | Core Library Container | http://localhost:2000 |
| **shell**     | App Shell              | http://localhost:3000 |
| **main**      | Standalone Application | http://localhost:3001 |
| **order**     | Standalone Application | http://localhost:3002 |
| **products**  | Standalone Application | http://localhost:3003 |
| **others...** | Standalone Application | ...                   |

![https://www.kimcoder.io/assets/images/federation-example.png](https://www.kimcoder.io/assets/images/federation-example.png)

## Run Demo

1. Run `npm install` in root
2. Run `npm run start` in root
