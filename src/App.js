import React from 'react'
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Products from './pages/products/Products';
import CheckOut from './pages/checkOut/CheckOut';
import ReusableProduct from './pages/product/ReusableProduct';

function App() {
  const [count,setCount]=React.useState(0);
  function increase(){
    setCount(prevValue=>prevValue+1);
    console.log(count)
  }

  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home increase={increase}/>}></Route>
            <Route path="/cart" element={<Cart handleCount={count}/>}></Route>
            <Route path="/products" element={<Products/>}></Route>
            <Route path="/checkout" element={<CheckOut/>}></Route>
            <Route path="/product/:id" element={<ReusableProduct/>}></Route>
        </Routes>
    </Router>
  );
}

export default App;
