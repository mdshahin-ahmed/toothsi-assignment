import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Pages/Home/Home";
import Checkout from "./Pages/Checkout/Checkout";
import Procced from "./Pages/Proceed/Procced";
import { useState } from "react";

function App() {
  const [cartProduct, setCartProduct] = useState([]);
  // const [quantity, setQuantity] = useState();

  const addToCart = (item) => {
    cartProduct.push(item);
  };
  const clearCart = () => {
    setCartProduct([]);
  };
  const deleteItem = (id) => {
    setCartProduct(cartProduct.filter((product) => product.id !== id));
  };
  const handleIncrement = (id) => {
    setCartProduct((product) =>
      product.map((item) =>
        id === item.id
          ? { ...item, quantitys: Number(item.quantitys) + 1 }
          : item
      )
    );
  };
  const handleDecrement = (id) => {
    setCartProduct((product) =>
      product.map((item) =>
        id === item.id
          ? {
              ...item,
              quantitys:
                Number(item.quantitys) - (Number(item.quantitys) > 1 ? 1 : 0),
            }
          : item
      )
    );
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
            element={
              <Checkout
                cartProduct={cartProduct}
                clearCart={clearCart}
                deleteItem={deleteItem}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
              ></Checkout>
            }
          ></Route>
          <Route path="/checkout/proceed" element={<Procced></Procced>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
