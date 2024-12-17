## Use a Bundler (e.g., Vite, Webpack)
For larger projects, you can use a bundler like Vite or Webpack to handle TypeScript files and serve them in the browser.

Vite is a local development server written by Evan You,[1] the creator of Vue.js, and used by default by Vue and for React project templates. It has support for TypeScript and JSX. It uses Rollup  and esbuild internally for bundling

vite runs on: http://localhost:5173/

Webpack is a free and open-source module bundler for JavaScript.[5][6][7][8] It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included.[9] Webpack takes modules with dependencies and generates static assets representing those modules
tools that convert typescript to javascript

## babel vs webpack
### Babel
A JavaScript compiler that converts modern JavaScript code into a version that's compatible with older browsers. This allows developers to use the latest JavaScript features without worrying about compatibility issues.

### Webpack
A module bundler that takes all the JavaScript code and assets in a project and bundles them into one or more output files. This can include images and stylesheets. Webpack also allows developers to use loaders and plugins to optimize their code and assets. 

Babel is used to transpile the JavaScript code, making it compatible with older browsers, while Webpack is used to bundle and optimize the code. This combination allows developers to write code using the latest language features and ensure it's efficiently packaged for deployment.

Babel is capable of converting JSX to JavaScript - the TypeScript compiler can't do this. So, if your project is built using React, you will need Babel.

##  Install Node.js and TypeScript
Ensure you have Node.js installed. Then, install TypeScript globally (if you haven't already):
npm install -g typescript

## Compile the TypeScript File
Compile the TypeScript file into JavaScript using the tsc (TypeScript Compiler) command:

tsc example.ts

(or) npx tsc example.ts

## Run the Compiled JavaScript File
Use Node.js to run the compiled JavaScript file:

node example.js

## Watch Mode for Automatic Compilation (Optional) 
For continuous development, you can use tsc in watch mode to automatically recompile the 
TypeScript file when changes are made:

tsc example.ts –watch

## Configure a tsconfig.json (Optional)
If you're working with multiple TypeScript files or a project, initialize a TypeScript configuration file:

tsc –init

## Push Your Local Project to GitHub
Make sure your project is already pushed to a GitHub repository. If not, initialize a repository and push your code:

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
