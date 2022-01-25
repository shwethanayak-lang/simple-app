import './App.css';
import Navigation from './Pages/navigation';
import Userlist from './Pages/userlist';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Navigation />}></Route>
        <Route path="/Userlist" element={<Userlist />}></Route>
        </Routes>
        </BrowserRouter>

    </>
  ); 
}

export default App;
