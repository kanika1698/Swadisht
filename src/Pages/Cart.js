import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuCard from "../Components/MenuCard";
import "./RestaurantPage.css";
import cartSlice, { clearCart } from "../Utility/cartSlice";
import emptyCart from "../Utility/emptycart.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  
  const [cart, setCart] = useState(false);
  const [placeOrder, setPlaceOrder] = useState(false);

  console.log("cartItems",cartItems);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCart());
  };


  const notify = () =>
    toast.success(
      "Order Placed Successfully",
      {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      },
     
    );

  useEffect(() => {
    setCart(true);
  }, []);
  return (
    <>
      {cartItems.length !== 0 ? (
        <h3 className="my-3 fw-bold">Your Cart Items</h3>
      ) : (
        ""
      )}

      <div className="menumargin">
        <MenuCard menuCard={cartItems} cart={cart} />
      </div>
      <div className="mt-3 col-12">
        {cartItems.length === 0 ? (
          " "
        ) : (
          <>
            <button
              type="button"
              class="btn btn-dark btn-lg mt-0 mb-3 clearbtn"
              onClick={handleClear}
            >
              Clear Cart
            </button>

            <button
              type="button"
              class="btn btn-dark btn-lg mt-0 mb-3 mx-3 clearbtn"
              onClick={notify}
            >
              Place Order
            </button>
            <ToastContainer />
          </>
        )}
      </div>
      <div className="row">
        {cartItems.length === 0 ? (
          <div className="col-12">
            <img className="mb-4" src={emptyCart} />
            <h5>Looks like you have not added items into your cart. </h5>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Cart;
