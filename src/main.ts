import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { greeting } from './greeting';
import { counter } from './newcounter';
import { formatDate } from './utils';
import {FullTimeEmployee,printEmployeeDetails} from './concepts';
import { Direction } from './enum';
import { loadHome } from './pages/home';
import { loadAbout } from './pages/about';

function router() {
  const path = window.location.pathname;

  switch (path) {
    case '/about':
      loadAbout();
      break;
    case '/home':
   // default:
      loadHome();
      break;
  }
}

function navigateTo(path: string) {
  history.pushState({}, '', path);
  router();
}
document.addEventListener('DOMContentLoaded', () => {
  // Set up navigation links
  document.body.addEventListener('click', (event) => {
    const target = event.target as HTMLAnchorElement;
    if (target.tagName === 'A' && target.dataset.link !== undefined) {
      event.preventDefault();
      navigateTo(target.href);
    }
  });
    // Initialize the router
    router();
  });
  
  // Handle browser navigation events
  window.addEventListener('popstate', router);

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
 <nav>
    <a href="/home" data-link>Home</a>
    <a href="/about" data-link>About</a>
  </nav>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
