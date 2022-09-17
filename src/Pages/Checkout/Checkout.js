import React from "react";
import { Link } from "react-router-dom";
import "./Checkout.css";

const Checkout = ({
  cartProduct,
  clearCart,
  deleteItem,
  handleIncrement,
  handleDecrement,
}) => {
  let productSubTotal = 0;
  let subtotal = 0;
  let vat = 0;
  let total = 0;

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-8">
            <table className="w-100">
              <thead className="cHeadWrap">
                <th className="cThProduct">Product</th>
                <th className="cThPrice">Price</th>
                <th className="cThQuantity">Quantity</th>
                <th className="cThSubtotal">Subtotal</th>
              </thead>
              <tbody>
                {cartProduct.map((product) => {
                  const { id, img, name, price, quantitys } = product;
                  productSubTotal = Number(quantitys) * Number(price);
                  subtotal += Number(productSubTotal);
                  total = subtotal + vat;
                  return (
                    <tr key={id}>
                      <td>
                        <div className="product">
                          <div
                            className="delete"
                            onClick={() => deleteItem(id)}
                          >
                            <i className="fa-solid fa-xmark"></i>
                          </div>
                          <div className="productImage">
                            <img className="img-fluid" src={img} alt="" />
                          </div>
                          <div className="productName">{name}</div>
                        </div>
                      </td>
                      <td className="fw-semibold priceTh">
                        <span>$</span>
                        {price}
                      </td>
                      <td>
                        <div className="quantityWrap">
                          <div
                            className="minus"
                            onClick={() => handleDecrement(id)}
                          >
                            -
                          </div>
                          <div className="quantity">{quantitys}</div>
                          <div
                            className="plus"
                            onClick={() => handleIncrement(id)}
                          >
                            +
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="subtotal text-primary fw-bold">
                          <span>$</span>
                          {Number(price) * Number(quantitys)}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="col-4 text-start shadow totalCartWrap">
            <h4 className="mb-3">Cart totals</h4>
            <div className="subTotal">
              <span>Subtotal</span>
              <span className="subTotalPrice">
                <span>$</span>
                {subtotal}
              </span>
            </div>
            <hr className="cartHr" />
            <div className="total">
              <span>Total</span>
              <span className="totalPrice">
                <span>$</span>
                {total}
              </span>
            </div>
            <Link to={"./proceed"}>
              <div className="proceed" onClick={() => clearCart()}>
                Proceed to checkout
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
