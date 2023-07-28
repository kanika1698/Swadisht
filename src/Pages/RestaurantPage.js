import React, { useState, useEffect } from "react";
import "./RestaurantPage.css";
import MenuCard from "../Components/MenuCard";
import { BsFillClockFill } from "react-icons/bs";
import { TbCoinRupee } from "react-icons/tb"
import { AiFillStar } from "react-icons/ai"
import { useParams } from "react-router-dom";
import MenuShimmer from "./MenuShimmer";


function RestaurantPage() {
  const [resData, setResData] = useState({
    name : "",
    cuisines : "", 
    locality : "",
    totalRatingsString : "",
    avgRatingString: "",
    costForTwoMessage: "",
    sla : {
      lastMileTravelString : "",
      slaString : ""
    }
  });

  const {id} = useParams();

  console.log("id",id);

  const [menuCard , setMenuCard] = useState([])

  const {
    name,
    cuisines,
    locality,
    totalRatingsString,
    avgRatingString,
    costForTwoMessage,
  } = resData
 const { lastMileTravelString, slaString } =
    resData?.sla

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}`
    );
    const json = await data.json();
    console.log("json",json);
    setResData(json?.data?.cards[0]?.card?.card?.info);
    setMenuCard(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
    console.log(json?.data?.cards[0]?.card?.card?.info);
    console.log(resData);
    
  };
  console.log("menu",menuCard);

  return (
    <div className="resPage container">
      <div className="resInfo row">
        <div className="col-6 mb-3">
          <p className="mb-0 mt-5 res_name">{name}</p>
          <p className="mb-1 res_cuisines">{cuisines}</p>
          <p className="res_cuisines">
            {locality} , {lastMileTravelString}
          </p>
        </div>
        <div className="mb-3 mt-5 col-6 resInfo">
          <div className="res_ratings">
            <p><AiFillStar/> {avgRatingString}</p>
            <p>{totalRatingsString}</p>
          </div>
        </div>
      </div>
      <hr className="seperator" />
      <div className="time_cost  row-3">
        <div className="col-1">
          <BsFillClockFill size={17}/> {slaString}
        </div>
        <div className="col-2">
         <TbCoinRupee size={20}/> {costForTwoMessage}
        </div>
      </div>
      <hr className="seperator" />
      {menuCard.length === 0? <MenuShimmer/> : <MenuCard menuCard={menuCard} /> }
    </div>
  );
}
export default RestaurantPage;