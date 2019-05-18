# 🏃 ng-rust-wasm-webworker

Project template with the following features

* angular 7+
* rust wasm (wasm_bindgen)
* Web workers (using comlink)

Check out [this awesome guide](https://medium.com/lacolaco-blog/enjoyable-webworkers-in-angular-41cfeb0e6519) for how to use comlink with Angular. For my implementation, see the [worker folder](src/app/worker/)

## Some notes

I've created a symbolic link from my angualar assets folder to the wasm pkg

```bash
cd src/assets
ln -s ../../wasm-worker/pkg
```

To build rust, I use wasm-pack with the no-modules option (important!)

```bash
wasm-pack build --release --target no-modules
```

## Problems

* Hot loading not working. Get the error "Failed to load app.component.html" after making a change.

