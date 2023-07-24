import './App.css';
import {BrowserRouter as Router, Routes, Route, } from "react-router-dom";

import Counter from './components/Counter';
import Header from './components/Header';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';
import MenuList from './components/MenuList';


function App() {
return (
    <div className="App">
    
      <Router>
        <Header/>
        <MenuList/>
        <Routes>
       <Route path='/' element={<ProductListing/>}  ></Route> 
        <Route path="/product/:id" element={<ProductDetails/>}  ></Route>
        <Route path='/counter' element={<Counter/>}  ></Route>
       </Routes>
      </Router>
         

     
    </div>
  );
}

export default App;
