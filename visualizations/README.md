# Looker Visualizations

This is Looker Visualizations with Storybook

## 🚀 Quick start

1.  **Install Dev Dependecies.**

    Using yarn or npm, install all dependencies

    ```sh
    npm install
    ```

    or

    ```sh
    yarn
    ```

2.  **Write your first story!**

    Start running Storybook's local development enviroment

    ```sh
    npm run storybook
    ```

    or

    ```sh
    yarn storybook
    ```

3.  **Add your story to stroybook!**

    You need to add your story to storybook config file: `.storybook/config.js`

4.  **Compile your code**

    You need to compile your react code, let's run:

    ```sh
    npm run build
    ```

    or

    ```sh

    yarn build
    ```

    Your compiled code can be found at `./dist`

Open the `stories` directory in your code editor of choice and edit existing or create new stories (which should all end with `.stories.js`). Save your changes and the browser will update in real time with your components' stories!

1.  **`/.storybook`**: The directory that contains all configurations for [Storybook](https://storybook.js.org) and its add-ons

2.  **`/node_modules`**: The directory where all of the modules of code that your project depends on (npm packages) are automatically installed.

3.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (put here your visualizations). “Src” is a convention for “source code”.

4.  **`/stories`**: This directory contains all stories for [Storybook](https://storybook.js.org)! You might want to change the location of this directory, in that case just move it and change the `../stories` reference inside of `.storybook/config.js` to point to the new location

5.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

6.  **`.prettierrc`**: This is a configuration file for a tool called [Prettier](https://prettier.io/), which is a tool to help keep the formatting of your code consistent.

11) **`LICENSE`**: Licensed under the MIT license.

12) **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. (You won’t change this file directly).

13) **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

14) **`README.md`**: A text file containing useful reference information about your project.

15) **`yarn.lock`**: [Yarn](https://yarnpkg.com/) is a package manager alternative to npm. You can use either yarn or npm, though all of the Gatsby docs reference npm. This file serves essentially the same purpose as `package-lock.json`, just for a different package management system.
