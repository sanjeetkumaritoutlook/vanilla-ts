import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { greeting } from './greeting';
import { counter } from './newcounter';
import { formatDate } from './utils';
import {FullTimeEmployee,printEmployeeDetails} from './concepts';
import { Direction } from './enum';

const currentDate = new Date();
// Creating an instance of FullTimeEmployee class
const emp1 = new FullTimeEmployee(101, 'Alice', 'Engineering', 5000);
function moveCharacter(direction: Direction) {
  console.log(`The character is moving: ${direction}`);
}

let currentDirection = Direction.Left;
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
    <h1>${greeting('World')}</h1>
      <p>${counter(5)}</p>
<p>Today's date: ${formatDate(currentDate)}</p>
<div id="employee-container">${printEmployeeDetails(emp1)}<div>
<p>${moveCharacter(currentDirection)}</p>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
