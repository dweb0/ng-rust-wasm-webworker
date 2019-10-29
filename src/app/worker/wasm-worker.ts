import { expose } from 'comlink'

export class WasmWorker {

    wasm_bindgen: any = null;

    constructor() {
        this.loadWasm().then(() => {
            console.log("Wasm scripts loaded.");
        })
    }

    async loadWasm() {
        // @ts-ignore
        await require('../../assets/pkg/wasm_worker.js');
        // @ts-ignore
        await wasm_bindgen('../../assets/pkg/wasm_worker_bg.wasm');
        // @ts-ignore
        this.wasm_bindgen = wasm_bindgen;
    }

    calculate(n: number) {
        return new Promise<number>((resolve, eject) => {
            resolve(this.wasm_bindgen.slow_calculation());
        });
    }

}

expose(WasmWorker)
