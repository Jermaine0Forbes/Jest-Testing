# Jest Testing

- [how to install jest][inst-jest]
- [how to test react app][test-react]

## React
- [how to simulate an event][sim-event]

[sim-event]:how-to-simulate-an-event
[test-react]:#how-to-test-react-app
[home]:#jest-testing
[inst-jest]:#how-to-install-jest


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
