import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
// import './bases/03-interfaces'
// import './04-arrays.ts'
// import './06-onj-destructuring.ts'
// import './07-array-destructuring.ts'
// import './08-imp-exp.ts'
// import {getHeroesByOwner } from './08-imp-exp.ts'
// import { Owner} from './bases/heroes.data.ts'
import './bases/10-fetch-api.ts'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

    //se imprimira lo siguiente console.log(getHeroesByOwner('Marvel'));
    // console.log(getHeroesByOwner(Owner.MARVEL));
