import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import { Dashboard } from './components/Dashboard';
import { Landing } from './components/landing';

function App() {
    return (
        <BrowserRouter>
            <Appbar/>
            <Routes>
                <Route path="/dashboard" element = {<Dashboard/>} />
                <Route path="/landing" element = {<Landing/>} />
            </Routes>
            
        </BrowserRouter>
    );
}

function Appbar(){
    const navigate = useNavigate();
    return <div>
        <div>
            <button onClick={()=>{
                navigate("/landing")
            }}>Landing page</button>
            
            <button onClick={()=>{
                navigate("/dashboard")
            }}>Dashboard</button>
        </div>
    </div>
}

export default App;
