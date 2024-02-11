import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
const Dashboard = lazy(() => import('./components/Dashboard'))
const Landing = lazy(() => import('./components/Landing'))

import { Suspense, lazy } from 'react';

function App() {

    //Suspense API
    return (
        <div>
            <BrowserRouter>
                {/* Define your routes here */}
                <Appbar/>
                <Routes>
                    <Route path="/dashboard" element = {<Suspense fallback= {"loading..."}>
                        <Dashboard/></Suspense>}> </Route>
                    <Route path="/landing" element = {<Suspense fallback= {"loading..."}>
                        <Landing/></Suspense>}> </Route>
                </Routes>
            
            </BrowserRouter>
        </div>
    );
}

function Appbar(){
    const navigate = useNavigate();
    return(
        <div>
            <div>
                <button onClick={()=> {
                    navigate("/landing")
                }}>Landing</button>
                <button onClick={()=> {
                    navigate("/dashboard")
                }}>Dashboard</button>
            </div>
        </div>
    )
}
export default App;
