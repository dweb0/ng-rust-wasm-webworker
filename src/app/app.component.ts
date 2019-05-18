import { Component, OnInit } from '@angular/core';
import { WasmWorkerService } from './worker/wasm-worker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    input: number = 10;
    output: number = null;

    constructor(private wasmWorkerService: WasmWorkerService) {}

    ngOnInit() {
        this.wasmWorkerService.initialize();
    }

    calcFactorial() {
        this.wasmWorkerService.calcFactorial(this.input).then(output => {
            this.output = output;
        })
    }
}
