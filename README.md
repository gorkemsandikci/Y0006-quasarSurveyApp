# How To Create Project
```bash
yarn global add @quasar/cli
```
```bash
✔ What would you like to build? 
› App with Quasar CLI, lets go!

✔ Project folder: 
› quasar-project

-Pick Quasar v2, Vue 3, TypeScript, Vite
✔ Project description: 
› Survey Application: Quasar v2, Vue 3, TypeScript and Vite

✔ Author: 
› gorkemsandikci <gorkemsandikci@gmail.com>

✔ Pick a Vue component style: 
› Composition API with <script setup>

✔ Pick your CSS preprocessor: 
› Sass with SCSS syntax

✔ Check the features needed for your project: 
› ESLint, State Management (Pinia), Axios, Vue-i18n
  
›eslint prettier selection
›yes, use yarn
```

"To get started:
  cd quasar-project
  quasar dev # or: yarn quasar dev # or: npx quasar dev
Documentation can be found at: https://v2.quasar.dev"
  
```bash
yarn install
```
```bash
quasar dev
```
For add a capacitor to project:
```bash
quasar mode add capacitor
# capacitor id= com.benceanket.app
```
  
```bash
quasar dev
``` 
# Survey-App (quasar-project)

Survey Application: Quasar v2, Vue 3, TypeScript and Vite

## Install the dependencies
```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Lint the files
```bash
yarn lint
# or
npm run lint
```


### Format the files
```bash
yarn format
# or
npm run format
```



### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
