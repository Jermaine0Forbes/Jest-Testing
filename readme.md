# Jest Testing

- [how to install jest][inst-jest]
- [how to test react app][test-react]
- [how to setup jest with react][jest-react]
- [how to setup jest-dom][install-jest-dom]

## Jest Dom 
- [toBeInTheDocument][jd-tbitd]

## React
- [how to simulate an event][sim-event]

## Errors
- [Support for the experimental syntax 'jsx' isn't currently enabled][err-1]
- [ReferenceError: document is not defined][err-2]

[jd-tbitd]:#tobeinthedocument
[install-jest-dom]:#how-to-setup-jest-dom
[err-3]:#document-is-not-defined
[err-1]:#support-for-the-experimental-syntax-jsx-isnt-currently-enabled
[jest-react]:#how-to-setup-jest-with-react
[sim-event]:how-to-simulate-an-event
[test-react]:#how-to-test-react-app
[home]:#jest-testing
[inst-jest]:#how-to-install-jest


### toBeInTheDocument

<details>
<summary>
View Content
</summary>

:link: **Reference**
- []()
---

:blue_book: **Summary:**

```js

const App = () => {

  return(
    <h2 className="bg-primary text-white px-4"> Hello from  React</h2> 
  )
}

```

```js
describe("App is being rendered", () => {

  it("should see the heading from the app", () => {
     render(<App/>)

     const heading = screen.getByRole("heading", {name: /Hello from React/i});
     expect(heading).toBeInTheDocument(); // true
  })
})l
```

</details>

[go back :house:][home]

### how to setup jest dom

<details>
<summary>
View Content
</summary>

:link: **Reference**
- [jest-dom](https://github.com/testing-library/jest-dom)

---
1.  First, install the library

```
npm install -D @testing-library/jest-dom
```
2. Next add the import the library in any test file you are testing


```js
/**
 * @jest-environment jsdom
 */

import { expect, test } from "@jest/globals";
import React from "react";
import  renderer from "react-test-renderer";
import App ,{ColorBox} from "./App";
import '@testing-library/jest-dom'; // like so
import {render, fireEvent, screen} from "@testing-library/react";

```

</details>

[go back :house:][home]

### document is not defined

<details>
<summary>
View Content
</summary>

:link: **Reference**
- [stackoverflow](https://stackoverflow.com/questions/43901660/referenceerror-document-is-not-defined-when-trying-to-test-a-create-react-app)

---
:blue_book: **Summary:** There are pretty much three different ways to make this error go away. Basically you need to tell 
jest to mock the document or window of the DOM. If you don't put an option, comment, or change the testing environment 
to tell jest to use the jest-dom in order to do the testing

1. First method, is to put a comment at the top of  your test file like so.

```js

/**
 * @jest-environment jsdom
 */

import { expect, test } from "@jest/globals";
import React from "react";
import  renderer from "react-test-renderer";
import App ,{ColorBox} from "./App";
import '@testing-library/jest-dom';
import {render, fireEvent, screen} from "@testing-library/react";




describe('My Test Suite', () => {
  it('should show my first test', () => {
    expect(true).toEqual(true);
  });
});
```
2. Second method,  within the scrips property of the package.json 

```json
"scripts": {
   "test": "react-scripts test --env=jsdom"
}
```

3. Third method, in the `jest.config.js`

```js
testEnvironment: 'jsdom'
```

</details>

[go back :house:][home]

### Support for the experimental syntax 'jsx' isn't currently enabled

<details>
<summary>
View Content
</summary>

:link: **Reference**

- [Unexpected token “<”](https://stackoverflow.com/questions/56952728/jest-tests-on-react-components-unexpected-token)
- [“Cannot use import statement outside a module”](https://stackoverflow.com/questions/58613492/how-to-resolve-cannot-use-import-statement-outside-a-module-in-jest)
---

This is an error that you will see if you're jest to test react applications. This solution can also fix several other errors like 
-  Unexpected token “<”
-  “Cannot use import statement outside a module” 

Basically the way to resolve this issue is to add react presets within a `babel.config.js`. If you have set up jest yet, then go [here][jest-react]


1. If you have not installed these babel packages then you should right now.

```
 npm i -D @babel/preset-env @babel/preset-react
```

2. Next, create a `babel.config.js` file and insert this code

```js
module.exports = {presets: ['@babel/preset-env','@babel/preset-react']}

```
3. What I found out is that when you added these presets you don't receive this error message, when you run jest that might a jsx component
within the file.

</details>

[go back :house:][home]


### how to setup jest with react

<details>
<summary>
View Content
</summary>

:link: **Reference**

- [How to test React with Jest](https://www.robinwieruch.de/react-testing-jest)
---

I'm going to assume that you already installed react and got a react app up and running

1. So first install jest

```
npm i -D jest
```
2. Now in the package.json, add this in the *scripts* section. This will allow you to run jest with any
cofigurations that you are going to put in the `jest.config.js`

```json
{
  ...
  "scripts": {
    "start": "webpack serve --config ./webpack.config.js --mode development",
    "test": "jest --config jest.config.js",
    "test:watch": "npm run test -- --watch",
  },
  ...
}
```

3. Now let's `vim jest.config.js` and add this necessary code to look for any js files that might have the *spec* extension

```js
module.exports = {
  "testRegex": "((\\.|/*.)(spec))\\.js?$"
}
```

4. If you have not installed babel libraries that are needed for jest, here is the time to do so

```
 npm i -D @babel/preset-env @babel/preset-react
```

5. Next, let's create a `babel.config.js` file in order to make sure jest does not throw any errors when you add JSX in
your testing files. Add code like so 

```js
module.exports = {presets: ['@babel/preset-env','@babel/preset-react']}

```

6. Now if you already have an App.js file, create a *App.spec.js* file and add code like so. This will be a general
 assertion to just to see if jest is running.

```js
import React from "react";


describe('My Test Suite', () => {
  it('should show my first test', () => {
    expect(true).toEqual(true);
  });
});

```

7. Now run `npm run test`, jest should start running and the result should pass.

</details>

[go back :house:][home]

### how to simulate an event

<details>
<summary>
View Content
</summary>

:link: **Reference**
- [react](https://reactjs.org/docs/test-utils.html#simulate)
---
:question: **Syntax**

```js
Simulate.{eventName}(
  element,
  [eventData]
)
```

---
:blue_book: **Summary:**

Simulate an event dispatch on a DOM node with optional eventData event data.

---

**In App.test.js**

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { act, Simulate } from 'react-dom/test-utils';
import TestRenderer from 'react-test-renderer';


let container; // will be container for the app component

describe("Testing App" , ()=>{

  beforeEach(() =>{
    container = document.createElement("div");
    document.body.appendChild(container);
  })

  afterEach(() => {
  document.body.removeChild(container);
  container = null;
});



  it("should see increment", () =>{

    // Prepares a component for assertions by rendering it
    act(() =>{
      ReactDOM.render(<App/>, container)
    })


      // search through the app component to find the a selector that has the id
      // of count-btn
     let btn = container.querySelector("#count-btn");
     let counter = container.querySelector("#counter");

     // finds the property onClick and executes it twice
     Simulate.click(btn)
     Simulate.click(btn)

      // toBe checks if the value is equivalent to the expected value
     expect(Number(counter.textContent)).toBe(2);
  })

})

```


**In App.js**

```js
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export const Counter = (props) =>{
  return (
    <div className="mb-3">
      <h3> Increment Button </h3>
      // the button increments the counter
      <button id="count-btn" className=" btn btn-success" onClick={props.click}>increment

      // the span tag displays the current value of the counter
        <span id="counter" className="ml-1badge badge-light">{props.count}</span>
      </button>
    </div>
  )
}



class App extends Component {

    constructor(props){
      super(props)
      this.state = {count:0}
      this.num = 0;
      this.updateClick = this.updateClick.bind(this);
    }

      updateClick (){
        this.setState({count:++this.num})
      }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="header">Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Counter count={this.state.count} click={this.updateClick}/>
        <TextInpt />
      </div>
    );
  }
}

export default App;

```

</details>

[go back :house:][home]


### how to test react app

<details>
<summary>
View Content
</summary>

:link: **Reference**
- [jest](https://jestjs.io/docs/en/tutorial-react)
- [jest-transform-stub](https://github.com/eddyerburgh/jest-transform-stub)
- [Jest tests can't process import statement](https://github.com/vuejs/vue-cli/issues/1584)
---

:blue_book: **Summary:**

1. Install these packages

```
npm i babel-jest @babel/preset-env @babel/preset-react react-test-renderer jest-transform-stub
```
2. Create a `babel.config.js` and add this

```js
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
};
```

3. Now create a `jest.config.js` and add this code. The `babel-jest` should be able
to compile the javascript. And the `jest-transform-stub`, will avoid any errors
when importing non-javascript files

```js
module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json'],
  transform: {
    '.+\\.(css|styl|svg|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/']
};
```

4. If you have an `App.test.js` you can run the file, and the test should run
fine. But, if you don't have that file then create one and add this into it.


```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

```

</details>

[go back :house:][home]


### how to install jest

<details>
<summary>
View Content
</summary>

:link: **Reference**
- [jest](https://jestjs.io/docs/en/getting-started)
---

```
npm i jest -D

npm i -g jest

```

</details>

[go back :house:][home]
