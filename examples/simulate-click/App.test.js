import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
var Util = require('react-dom/test-utils'); // ES5 with npm
import TestRenderer from 'react-test-renderer';




describe("Testing App" , ()=>{

  const component = TestRenderer.create(<App/>);
  const instance = component.root;
  const counter = instance.findByProps({id:"counter"});


  it("should see increment", () =>{
    let tree = component.toJSON();
     let btn = instance.findByProps({id:"count-btn"});
      btn.props.onClick();
      btn.props.onClick();
     expect(counter.children).toContain("2");
  })

})
