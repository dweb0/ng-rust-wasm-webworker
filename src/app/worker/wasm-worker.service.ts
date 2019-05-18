import { Injectable } from '@angular/core';
import { wrap } from 'comlink';

async function createWorker() {
    const workerProxy = wrap<typeof import('./wasm-worker').WasmWorker>(
        // @ts-ignore
        new Worker('./wasm-worker', { type: 'module'})
    );
    return await new workerProxy();
}

@Injectable({
  providedIn: 'root'
})
export class WasmWorkerService {

    primary_worker: any = null;
    
    initialize() {
        this.primary_worker = createWorker().then(() => {
            console.log("Ready to work!");
        })
    }

    factorial(n: number) {
        return this.primary_worker.factorial(n);
    }
}
