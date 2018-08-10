This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and [TypeScript](https://www.typescriptlang.org).


## Folder Structure

```
demo/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    components/
       About.tsx
       AppContext.tsx
       User.tsx
    containers/
       Layout.tsx
       WrapperState.tsx
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```
This project use **Context**
Context provides a way to pass data through the component tree without having to pass props down manually at every level.
In a typical React application, data is passed top-down (parent to child) via props, but this can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

## Add new item menu
In the file **WrapperState.tsx** you should add new object in the item menu
His structure is:
        
        menu:[{'url':'/About','title':'About'},{'url':'/User','title':'User'}]
        
If you want to add new item only add new object * `{'url':'` **Here your new path** `','title':'` **Here your new title** `'}`
 

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
