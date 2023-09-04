import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Bisection from './components/Bisection';
import Taylor from './components/Taylor';
import {BrowserRouter,Routes,Route} from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/bi' element={<Bisection/>}></Route>
      <Route path='/Taylor' element={<Taylor/>}></Route>
      <></>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
