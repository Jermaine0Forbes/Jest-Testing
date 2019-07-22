# Jest Testing

- [how to install jest][inst-jest]
- [how to test react app][test-react]

[test-react]:#how-to-test-react-app
[home]:#jest-testing
[inst-jest]:#how-to-install-jest


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
