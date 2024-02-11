import { useContext, useState } from "react";
import { CountContext } from "./context"; 

function App() {
    // Define state variable 'count' and a function 'setCount' to update it
    const [count, setCount] = useState(0);
    
    // Wrap any component that wants to access the teleported value inside a provider
    return (
        <div>
            {/* Provide the 'count' value through the context provider */}
            <CountContext.Provider value={count}>
                {/* Render the 'Count' component with the current 'count' value */}
                <Count setCount={setCount}/>
            </CountContext.Provider>
        </div>
    );
}

// Functional component to display the count
function Count({ setCount }) {
    return (
        <div>
            {/* Render the 'CountRenderer' component to display the count */}
            <CountRenderer />
            {/* Render the 'Buttons' component to provide buttons to modify the count */}
            <Buttons setCount={setCount} />
        </div>
    );
}

// Functional component to render the count received from context
function CountRenderer() {
    // Access the 'count' value from the context
    const count = useContext(CountContext);
    return (
        <div>
            {/* Display the 'count' value */}
            {count}
        </div>
    );
}

// Functional component to render buttons for increasing and decreasing count
function Buttons({ setCount }) {
    // Access the 'count' value from the context
    const count = useContext(CountContext);
    return (
        <div>
            {/* Button to increase the count */}
            <button onClick={() => {
                setCount(count + 1);
            }}>Increase</button>
            {/* Button to decrease the count */}
            <button onClick={() => {
                setCount(count - 1);
            }}>Decrease</button>
        </div>
    );
}

export default App;