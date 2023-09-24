import wasmUrl from './table.wasm?url'
export const wasm = ()=>{
    const otherTable = new WebAssembly.Table({
        element: "anyfunc",
        initial: 2
    });

    WebAssembly.instantiateStreaming(fetch(wasmUrl))
        .then(obj => {
            const { tbl } = obj.instance.exports;
            console.log(tbl.get(0)());  // 13
            console.log(tbl.get(1)());  // 42

            otherTable.set(0, tbl.get(0));
            otherTable.set(1, tbl.get(1));

            console.log(otherTable.get(0)());
            console.log(otherTable.get(1)());
        });
}
