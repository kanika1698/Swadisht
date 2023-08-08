import React, { useState } from "react";
import { Image_Url } from "../Utility/Constants";
import "./MenuCard.css";
import { BiHeartSquare } from "react-icons/bi";
import {GrFormAdd} from "react-icons/gr"
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../Utility/cartSlice";

const MenuCard = ({ menuCard , cart }) => {
  console.log(menuCard);
   
  const dispatch = useDispatch()
  const handleAddItem = (menu) => {
    //dispatch an action
    console.log(menu);
    dispatch(addItem(menu))
  }

  const handleRemoveItem=(menu)=>{
    dispatch(removeItem(menu))
  }

  return (
    <div>
      {menuCard.map((menu) => {
        return (
          <div class=" card mb-3 menuCard">
            <div class="row">
              <div class="col-md-8 col-sm-12">
                <div class="card-body">
                  <span className="veg mx-3">
                    {" "}
                    {menu?.card?.info?.itemAttribute?.vegClassifier ===
                    "NONVEG" ? (
                      <BiHeartSquare size={21} color="red" />
                    ) : (
                      <BiHeartSquare size={21} color="green" />
                    )}
                  </span>
                  <p class="card-title text-start fw-bolder mx-3">
                    {menu?.card?.info?.name}
                  </p>
                  <p class="card-text text-start mx-3  fw-bold">
                    {menu?.card?.info?.defaultPrice / 100 ||
                      menu?.card?.info?.price / 100}
                    /-
                  </p>
                  <p class="card-text text-start mx-3">
                    <small class="text-body-secondary">
                      {menu?.card?.info?.description}
                    </small>
                  </p>
                </div>
              </div>
              <div className="col-md-4">
              <img
                  src={Image_Url + menu?.card?.info?.imageId}
                  class="img-fluid rounded-end imageBox pt-2"
                  alt="..."
                />
                { cart ? <button className="btn btn-dark btn-sm mt-3 fs-7" title="Add to cart" onClick={()=> handleRemoveItem(menu)}>Remove -</button> :<button className="btn btn-dark mt-3 fs-7 btn-sm" title="Add to cart" onClick={()=> handleAddItem(menu)}>Add +</button>}
                
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuCard;
