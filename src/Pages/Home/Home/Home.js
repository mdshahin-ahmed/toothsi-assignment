import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  // console.log(products);
  return (
    <div>
      <div className="container mt-5 ">
        <div className="headingSection d-lg-flex justify-content-between">
          <div className="filterSection mb-4 mb-lg-0">
            <select name="name" id="name" className="me-1">
              <option value="">Category</option>
              <option value="hoodies">Hoodies</option>
              <option value="t-shirt">T-Shirt</option>
              <option value="shirt">Shirt</option>
            </select>
            <select name="size" id="size">
              <option value="">Size</option>
              <option value="m">M</option>
              <option value="xl">XL</option>
              <option value="xxl">XXL</option>
            </select>
            <div className="resetSection">
              <i className="fa-solid fa-rotate-left text-blue ms-3 me-1"></i>
              <span className="text-blue">Reset</span>
            </div>
          </div>
          <div className="searchAndCardSection">
            <label className="me-2">Search</label>
            <input type="text" className="searchInput" />
            <button className="addToCard">Add To Card</button>
          </div>
        </div>
      </div>

      <div className="tableWrap container mt-5">
        <table className="w-100">
          <thead className="tableHeadingWrap">
            <th className="imageHeading">Image</th>
            <th className="nameHeading">Name</th>
            <th className="colorHeading">Color</th>
            <th className="stockHeading">Stock</th>
            <th className="priceHeading">Price</th>
            <th className="buyHeading">Buy</th>
          </thead>
          <tbody>
            {products.map((product) => {
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
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Product></Product>
    </div>
  );
};

export default Home;
