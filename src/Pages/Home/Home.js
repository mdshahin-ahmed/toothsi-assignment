import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import "./Home.css";

const Home = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState("ASC");
  const [inputValue, setInputValue] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [filterSize, setFilterSize] = useState("");

  const resetFunction = () => {
    setFilterCategory("");
    setFilterSize("");
  };

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...products].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setProducts(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...products].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setProducts(sorted);
      setOrder("ASC");
    }
  };
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  let quantity = document.getElementsByClassName("productQuantity").value;
  console.log(quantity);
  return (
    <div>
      <div className="container mt-5 ">
        <div className="headingSection d-lg-flex justify-content-between">
          <div className="filterSection mb-4 mb-lg-0">
            <select
              name="name"
              id="name"
              className="me-1"
              onClick={(e) => setFilterCategory(e.target.value)}
            >
              <option value="">Category</option>
              <option value="hoodies">Hoodies</option>
              <option value="t-shirt">T-Shirt</option>
              <option value="shirt">Shirt</option>
            </select>
            <select
              name="size"
              id="size"
              onClick={(e) => setFilterSize(e.target.value)}
            >
              <option value="">Size</option>
              <option value="m">M</option>
              <option value="xl">XL</option>
              <option value="xxl">XXL</option>
            </select>
            <div className="resetSection" onClick={() => resetFunction()}>
              <i className="fa-solid fa-rotate-left text-blue ms-3 me-1"></i>
              <span className="text-blue">Reset</span>
            </div>
          </div>
          <div className="searchAndCardSection">
            <label className="me-2">Search</label>
            <input
              type="text"
              className="searchInput"
              onChange={(e) => setInputValue(e.target.value)}
            />

            <Link to={"/checkout"}>
              <button className="addToCard">Add To Card</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="tableWrap container mt-5">
        <table className="w-100">
          <thead className="tableHeadingWrap">
            <th className="imageHeading">Image</th>
            <th className="nameHeading" onClick={() => sorting("name")}>
              <div className="d-flex justify-content-between">
                <div className="headingName align-self-center">Name</div>
                <div className="headingArrow">
                  <i className="fa-solid fa-caret-up"></i>
                  <i className="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </th>
            <th className="colorHeading" onClick={() => sorting("color")}>
              <div className="d-flex justify-content-between">
                <div className="headingName align-self-center">Color</div>
                <div className="headingArrow">
                  <i className="fa-solid fa-caret-up"></i>
                  <i className="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </th>
            <th className="stockHeading" onClick={() => sorting("stock")}>
              <div className="d-flex justify-content-between">
                <div className="headingName align-self-center">Stock</div>
                <div className="headingArrow">
                  <i className="fa-solid fa-caret-up"></i>
                  <i className="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </th>
            <th className="priceHeading" onClick={() => sorting("price")}>
              <div className="d-flex justify-content-between">
                <div className="headingName align-self-center">Price</div>
                <div className="headingArrow">
                  <i className="fa-solid fa-caret-up"></i>
                  <i className="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </th>
            <th className="buyHeading">Buy</th>
          </thead>
          <tbody>
            {products
              .filter(
                (product) =>
                  product.category
                    .toLowerCase()
                    .includes(filterCategory.toLowerCase()) &&
                  product.size.toLowerCase().includes(filterSize.toLowerCase())
              )
              .filter(
                (product) =>
                  product.name
                    .toLowerCase()
                    .includes(inputValue.toLowerCase()) ||
                  product.color
                    .toLowerCase()
                    .includes(inputValue.toLowerCase()) ||
                  product.stock
                    .toLowerCase()
                    .includes(inputValue.toLowerCase()) ||
                  product.price.toLowerCase().includes(inputValue.toLowerCase())
              )
              .map((product) => {
                const { id, img, name, color, stock, price } = product;
                return (
                  <tr key={id} className="pt-3">
                    <td className="tableImage">
                      <img src={img} alt="" />
                    </td>
                    <td className="tableName">{name}</td>
                    <td className="tableColor text-capitalize">{color}</td>
                    <td className="tableStock">
                      <i className="fa-solid fa-face-smile me-1"></i>
                      {stock}
                    </td>
                    <td className="tablePrice">
                      <span>$</span>
                      {price}
                    </td>
                    <td className="tableBuy">
                      <div className="quantity">
                        <input
                          type="number"
                          className="productQuantity"
                          defaultValue={1}
                        />
                      </div>
                      <div className="cartIcon">
                        <i className="fa-solid fa-cart-shopping"></i>
                      </div>
                      <div
                        className="checkBox"
                        onClick={() => addToCart({ ...product, quantitys: 2 })}
                      >
                        <input type="checkbox" name="" id="" />
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
