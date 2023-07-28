import React from "react";
import Carousel from "../Components/Carousel";
// import Filters from "../Components/filters";
import Body from "../Components/Body";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Restaurant_data } from "../Utility/Constants";

const Home = () => {
  const [resData, setResData] = useState([]);
  const [cuisines, setCuisines] = useState([]);
  const [carouselData, setCarouselData] = useState([]);


  useEffect(() => {
    fetchData();
  },[]);
   
  const fetchData = async () => {
    const data = await fetch(Restaurant_data);
    const json = await data.json();
    console.log(json);
    console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info);
    console.log(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
    setResData(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setCarouselData(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
    setCuisines(json?.data?.cards[4]?.card?.card?.facetList[1]?.facetInfo);
    
  };
  console.log("cuisines",cuisines);

  console.log(resData);

  return resData?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      
      <Carousel carouselData={carouselData} />
      {/* <Filters totalRes={totalRestaurants} resData={resData}/> */}
      <Body resData={resData} cuisines={cuisines}/>
    </div>
  );
}

export default Home;
