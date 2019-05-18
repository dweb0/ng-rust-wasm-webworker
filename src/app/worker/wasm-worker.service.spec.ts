import { TestBed } from '@angular/core/testing';

import { WasmWorkerService } from './wasm-worker.service';

describe('WasmWorkerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WasmWorkerService = TestBed.get(WasmWorkerService);
    expect(service).toBeTruthy();
  });
});
