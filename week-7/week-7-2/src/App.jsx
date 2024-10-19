import { useContext } from "react";
import { CountContext } from "./context"; 

function App() {
    // Wrap any component that wants to access the teleported value inside a provider
    return (
        <div>
          <Count/>
        </div>
    );
}

// Functional component to display the count
function Count({ setCount }) {
    return (
        <div>
           <CountRenderer/>
           <Buttons/>
        </div>
    );
}

// Functional component to render the count received from context
function CountRenderer() {
    // Access the 'count' value from the context
    const count = 0;
    return (
        <div>
            {/* Display the 'count' value */}
            {count}
        </div>
    );
}

// Functional component to render buttons for increasing and decreasing count
function Buttons() {
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