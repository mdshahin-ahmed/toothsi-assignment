import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Pages/Home/Home";
import Checkout from "./Pages/Checkout/Checkout";
import Procced from "./Pages/Proceed/Procced";
import { useState } from "react";

function App() {
  const [cartProduct, setCartProduct] = useState([]);

  const addToCart = (item) => {
    cartProduct.push(item);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart}></Home>}></Route>
          <Route
            path="/home"
            element={<Home addToCart={addToCart}></Home>}
          ></Route>
          <Route
            path="/checkout"
            element={<Checkout cartProduct={cartProduct}></Checkout>}
          ></Route>
          <Route path="/checkout/proceed" element={<Procced></Procced>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
