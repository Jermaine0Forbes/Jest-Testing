import React from 'react';
import ReactDOM from 'react-dom';
import App,{TextInpt} from './App';
import { act, Simulate } from 'react-dom/test-utils';
import TestRenderer from 'react-test-renderer';

let container;

describe("Form Testing", () =>{

  beforeEach(() =>{
    container = document.createElement("div");
    document.body.appendChild(container);
  })

  afterEach(() => {
  document.body.removeChild(container);
  container = null;
});


  it("should change text content", () =>{

      act(() =>{
        ReactDOM.render(<App/>, container)
      })
      let $ = container;
      let btn = $.querySelector("input[type='submit']");
      let inpt = $.querySelector("input[type='text']");
      let p = $.querySelector("p.App-intro")
      inpt.value = "megaman";
      Simulate.change(inpt);// changes input value to megaman

      expect(inpt.value).toBe("megaman")

      Simulate.submit(btn);// on submit the input value should be inserted into the p tag

      expect(p.textContent).toEqual("megaman")
  })

})
