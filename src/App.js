import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Form from './components/Form';
import Counter from './components/Counter';
import EcommerceApi from './components/EcommerceApi';

function App() {
return (
    <div className="App">
     <header className='App-header'>
      <Router>
       <Routes>
        <Route path='/' element={<EcommerceApi/>}  ></Route>
        <Route path='/home' element={<Home/>}  ></Route>
        <Route path='/counter' element={<Counter/>}  ></Route>
       </Routes>
      </Router>
         

      </header>
    </div>
  );
}

export default App;
