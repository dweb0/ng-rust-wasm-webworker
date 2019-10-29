import { Component, OnInit } from '@angular/core';
import { WasmWorkerService } from './worker/wasm-worker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    input: number = 10;
    output: number = null;
    //loading: boolean = false;
    outputs: number[] = [];

    constructor(private wasmWorkerService: WasmWorkerService) {}

    ngOnInit() {
        this.wasmWorkerService.initialize();
    }

    calculateJS() {
        let score = 0;
        for (let i = 0; i < 1_000_000_000; i++) {
            if (i % 13 == 2) {
                score += 1
            }
        }
        this.outputs.push(score)
    }

    calculateRS() {
        this.wasmWorkerService.calculate().then(output => {
            this.outputs.push(output);
        })
    }
}
