import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import SobrePage from './pages/sobre/Sobre';

function App() {


  return (
    <BrowserRouter>
    <Routes>
     <Route path = "/" element = {<HomePage/>} />    
     <Route path = "/sobre" element = {<SobrePage/>} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
