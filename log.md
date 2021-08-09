
# Logs 


## 8-8-21

### jest-dom toHaveAttribute

```jsx
const Counter = ({counter}) => {
    return (
        <div id="counter-container">
            <p data-testid="counter-value" className="counter-value">{counter}</p>
        </div>
    )
}
```

```js
describe("CounterContainer has been rendered", () => {

    it("should have an attribute called counter-value",() => {
        render(<CounterContainer/>)
        expect(screen.getByTestId("counter-value")).toHaveAttribute("class", "counter-value");
    })
});
```

### jest-dom toBeInTheDocument

```js
  it("should be in the DOM", () => {
    const {container} = render(<ColorBox/>)
    const box = container.querySelector("#color-box");
    expect(box).toBeInTheDocument()
  })
```

### testing library debug()

```js
  test('to have class', () => {

    const {debug, container} = render(<ColorBox/>)
    debug() // outputs how the component will be rendered
    const box = container.querySelector("#color-box");
    expect(box).toHaveClass("my-5")
  })
```
### jest-dom toHaveClass 

```js

  test('to have class', () => {

    const {debug, container} = render(<ColorBox/>)
    
    const box = container.querySelector("#color-box");
    expect(box).toHaveClass("my-5")
  })

```

### jest-dom toHaveStyle 

```js

  test("to have certain styles", () => {
     const  {container} = render(<ColorBox height="10" width={10} color="blue" />)
     const box = container.querySelector("#color-box");
     expect(box).toHaveStyle({height:"10px", width:"10px", background:"blue"})
  })

```