mod utils;
use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen(start)]
pub fn main() {
    utils::set_panic_hook();
}


#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

/// Purposefully slow calculation used for testing
/// 
/// Returns the time elapsed
#[wasm_bindgen]
pub fn slow_calculation() -> u32 {
    log("Calculating from wasm...");

    let mut score = 0;
    for i in 0..1_000_000_000 {
        if i % 13 == 2 {
            score += 1;
        }
    }

    score

}