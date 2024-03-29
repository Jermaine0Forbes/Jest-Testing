
# Logs

## 9-8-12

Jest
- [Making sure you're using the correct query](https://timdeschryver.dev/blog/making-sure-youre-using-the-correct-query)
- [Common mistakes with React Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- [WAI-ARIA Roles needed when doing getByRole](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)
- [Jest-Dom methods](https://github.com/testing-library/jest-dom) 
- [React testing library methods](https://testing-library.com/docs/react-testing-library/cheatsheet/)
- [Jest Expect methods](https://jestjs.io/docs/expect) 
- [Five Things You (Probably) Didn't Know About Testing Library](https://polvara.me/posts/five-things-you-didnt-know-about-testing-library)
- [jest unexpected token when importing css](https://stackoverflow.com/questions/54627028/jest-unexpected-token-when-importing-css)


## 8-12-21

### userEvent links

[user-event](https://testing-library.com/docs/ecosystem-user-event/)

###  userEvent for typing into input

```js
userEvent.type(firstName, "Jermaine");
```

###  userEvent for selecting options 

```js

userEvent.selectOptions(title, "Mr.");

//or 
userEvent.selectOptions(title, ["Mr.", "Ms."]);
```

### how to install and import userEvent

```
npm install --save-dev @testing-library/user-event @testing-library/dom
```

```
import userEvent from '@testing-library/user-event'
```

##  8-10-21

### jest-dom toBeVisible

```jsx

const App = () => {
    const 
    [food, setFood] = useState("pizza"),
    handleFood = (e) => {
        setFood(e.target.dataset.food)
    };

 return(

     <section>
        <div className="btn-group mb-4" role="group" aria-label="Basic example">
            <button type="button" aria-label="pizza-btn" className="btn btn-primary px-5" data-food="pizza" onClickCapture={(e) => {handleFood(e)}} ><i className="fas fa-pizza-slice"></i></button>
            <button type="button" aria-label="icecream-btn" className="btn btn-warning px-5" data-food="icecream" onClickCapture={(e) => {handleFood(e)}} ><i className="fas fa-ice-cream text-white"></i></button>
            <button type="button" aria-label="hamburger-btn" className="btn btn-success px-5" data-food="hamburger" onClick={(e) => {handleFood(e)}} ><i className="fas fa-hamburger"></i></button>
        </div>
        <div className="d-flex justify-content-between col-md-5">
            <ul className=" list-group" aria-label="pizza-menu" style={food == "pizza" ? {display:"block"} :{display:"none"}}>
                <li className="list-group-item bg-primary text-white">pizza item 1</li>
                <li className="list-group-item bg-primary text-white">pizza item 2</li>
                <li className="list-group-item bg-primary text-white">pizza item 3</li>
            </ul>
            <ul className="bg-warning list-group" aria-label="icecream-menu" style={food == "icecream" ? {display:"block"} :{display:"none"}}>
                <li className="list-group-item bg-warning text-white">icecream item 1</li>
                <li className="list-group-item bg-warning text-white">icecream item 2</li>
                <li className="list-group-item bg-warning text-white">icecream item 3</li>
            </ul>
            <ul className="bg-success list-group" aria-label="hamburger-menu" style={food == "hamburger" ? {display:"block"} :{display:"none"}}>
                <li className="list-group-item bg-success text-white">hamburger item 1</li>
                <li className="list-group-item bg-success text-white">hamburger item 2</li>
                <li className="list-group-item bg-success text-white">hamburger item 3</li>
            </ul>
        </div>
    </section>
 )   

```

```js
  it("should display a new food menu when you click on a different food icon and hide the previous food menu", () => {

    render(<App/>)

    const btn = screen.getByRole("button",{name:/icecream-btn/i}) // gets the icecream button based on the role and the aria-label
    const currentFoodMenu = screen.getByRole("list",{name:/pizza-menu/i}) // gets the pizza list based on the role and the aria-label
    const newFoodMenu = screen.getByRole("list",{name:/icecream-menu/i}); // gets the icecream list based on the role and the aria-label

    fireEvent.click(btn)// simulates a click event for the icecream button

    expect(btn).toHaveAttribute("data-food","icecream")
    expect(currentFoodMenu).toBeInTheDocument();
    expect(newFoodMenu).toBeVisible(); // checks if the icecream menu will appear when you click on the icecream button
    expect(currentFoodMenu).not.toBeVisible(); // checks to see if the list is hidden when you click on the icecream button

  })

```

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
