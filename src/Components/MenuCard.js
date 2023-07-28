import React, { useState } from "react";
import { Image_Url } from "../Utility/Constants";
import "./MenuCard.css"
import {BiHeartSquare} from "react-icons/bi"

const MenuCard = ({ menuCard }) => {
  console.log(menuCard);
  
  return (
    <div>
      { menuCard.map((menu)=>{
         return (
         <div class="card mb-3 menuCard" style={{ maxWidth: 100 + "%" }}>
          <div class="row g-0">
            <div class="col-md-8">
              <div class="card-body">
                <span className="veg mx-2"> {menu?.card?.info?.itemAttribute?.vegClassifier === "NONVEG" ? <BiHeartSquare size={21} color="red"/> : <BiHeartSquare size={21} color="green"/>}</span>
                <p class="card-title text-start fw-bolder mx-2">{menu?.card?.info?.name}</p>
                <p class="card-text text-start mx-2  fw-bold">{menu?.card?.info?.defaultPrice/100 || menu?.card?.info?.price/100}/-</p>
                <p class="card-text text-start mx-2">
                  <small class="text-body-secondary">{menu?.card?.info?.description}</small>
                </p>
              </div>
            </div>
            <div className="col-md-4 ">
            
              <img src={Image_Url + menu?.card?.info?.imageId} class="img-fluid rounded-end imageBox" alt="..." />

               
            </div>
          </div>
        </div>)
      })
        
      }
    </div>
  );
};

export default MenuCard;
