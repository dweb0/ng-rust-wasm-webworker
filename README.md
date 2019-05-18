# ng-rust-wasm-webworker

Project template with the following features

* angular 7+
* rust wasm (wasm_bindgen)
* Web workers (using comlink)

This repo is my solution to the problem after reading various guides online. If you think of a better way please let me know!

# Quick start

1. Generate templates using angular-cli and wasm-pack-template

```bash
ng new project
cargo generate --git https://github.com/rustwasm/wasm-pack-template
```

2. Build wasm with "--target no-modules" (important!)

```bash
wasm-pack build --release --target no-modules
```

3. Create symbolic link to generated pkg from angular assets folder

```bash
ln -s ../../wasm-worker/pkg
```

The next part of the guide is based off [link]

4. Install npm packages

```bash
npm install -D worker-plugin
ng add ngx-build-plus
```

5. Add webpack.extra.js to project root
6. Modify angular.json to add extraWebpackConfig
7. Install comlink

```bash
npm install --save comlink
```


## Acknowledgements

This guide is based off 

* [Enjoyable WebWorkers in Angular](https://medium.com/lacolaco-blog/enjoyable-webworkers-in-angular-41cfeb0e6519)

