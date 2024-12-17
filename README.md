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