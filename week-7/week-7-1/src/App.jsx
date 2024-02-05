import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Dashboard } from './components/Dashboard';
import { Landing } from './components/landing';

function App() {
    return (
        <BrowserRouter>
            {/* Define your routes here */}
            <Routes>
                <Route path="/dashboard" element = {<Dashboard/>} />
                <Route path="/landing" element = {<Landing/>} />
            </Routes>
            
        </BrowserRouter>
    );
}

export default App;
