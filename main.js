import './style.css'
import { setupCounter } from './counter.js'
import {demo} from "./src/demo.ts";
import {wasm} from "./src/wasm.js";

const mod = import.meta.glob('./src/*.js',{
    import:'glob'
    // import:'default'
})
async function test(){

    for (const p in mod){
        const m = await mod[p]()
        console.log(m)
    }
    for(let i=0;i<2;i++){
        const d = await new Promise(res=>{
            res(i)
        })
        console.log(d)
    }
}
function setup(){
    // 这里 str变化 导致执行两次
    document.querySelector('#app').innerHTML = `
  <div>
    <div class="glob">glob css</div>
    <h1>${demo.name}</h1>
    <div class="card">
      <button id="counter" type="button"></button>
      <button id="button2" type="button">button2</button>
    </div>
  </div>
`
document.querySelector('#button2').addEventListener('click',()=>{
    test()
})
}
setup()
wasm()
setupCounter(document.querySelector('#counter'))
