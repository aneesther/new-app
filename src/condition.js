import React from "react";
import {ThemeContext} from "./App"
import { Link } from "react-router-dom";
export default function Condition({message}) {
    let {count, setCount} = React.useContext(ThemeContext);
    const [condition, setCondition] = React.useState(true);

    function addToCount() {
        setCount (count + 1);
    }
    function subFromCount() {
        setCount(count - 1);
    }
    return (
        <div>
            {message ? <h1>Hello</h1> : <h1>Welcome back</h1>}
            <div className='flex'>
                <p className='box' onClick={subFromCount}>
                    -
                </p>
                <p>{count}</p>
                <p className='box' onClick={addToCount}>
                    +
                </p>
            </div>
            <Link to="/">
                {" "}
                <button>Go to State page</button>
            </Link>
            {condition ? <p>Condition is true</p> : <p>Condition is false</p>}
            <button onClick={() => setCondition(!condition)}>Toggle Condition</button>
        </div>
    );
}

// create a state for num
// create a button and pass handler and function
// your function should change num such that our app returns something different on each toggle