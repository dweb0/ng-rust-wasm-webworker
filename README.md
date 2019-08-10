# 🏃 ng-rust-wasm-webworker

Project template with the following features

* angular 7+
* rust wasm (wasm_bindgen)
* Web workers (using comlink)

This repository is based off [this awesome guide](https://medium.com/lacolaco-blog/enjoyable-webworkers-in-angular-41cfeb0e6519), which demonstrates how to setup comlink with Angular. 

For my **implementation of WASM web workers, see the [worker folder](src/app/worker/).**

## Getting started

1\. Create a new angular project 

```bash
ng new my-project
cd my-project
```

2\. I use [wasm-pack-template](https://github.com/rustwasm/wasm-pack-template) to generate a wasm project, and `wasm-pack` command line tool to build.

```bash
cargo generate --git https://github.com/rustwasm/wasm-pack-template.git --name my-wasm-project
```

3\. Install the following dependencies

```
ng add ngx-build-plus
npm install --save comlink
npm install -D worker-plugin
```

4\. Create a new file called `webpack.extra.js` and add this.

```js
// webpack.extra.js
const WorkerPlugin = require('worker-plugin');

module.exports = {
  plugins: [
    new WorkerPlugin({
      plugins: ['AngularCompilerPlugin']
    })
  ]
};
```

5\. Add to following options to your `angular.json` under ../architect/{build,serve}/options.

```json
"extraWebpackConfig": "webpack.extra.js",
```

See [angular.json](angular.json).

## Some notes

I've created a symbolic link from my angular assets folder to the wasm pkg

```bash
cd src/assets
ln -s ../../wasm-worker/pkg
```

To build rust, I use wasm-pack with the no-modules option (important!)

```bash
wasm-pack build --release --target no-modules
```

I've also added this to [src/types/index.d.ts](src/types/index.d.ts)

```js
// This code to appease typescript compiler
declare namespace WebAssembly {
    interface Module {
        a: any;
    }
    interface Memory {
        a: any;
    }
}
```

I like to use a [justfile](https://github.com/casey/just) so I can call ng or cargo commands from anywhere in the repo.

