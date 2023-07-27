import React from "react";
import Carousel from "../Components/Carousel";
// import Filters from "../Components/filters";
import Body from "../Components/Body";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Restaurant_data } from "../Utility/Constants";

const Home = () => {
  const [resData, setResData] = useState([]);
  const [totalRestaurants, settotalRestaurants] = useState("");
  const [carouselData, setCarouselData] = useState([]);


  useEffect(() => {
    fetchData();
  },[]);
   
  const fetchData = async () => {
    const data = await fetch(Restaurant_data);
    const json = await data.json();
    console.log(json);
    setResData(json?.data?.cards[2]?.data?.data?.cards);
    settotalRestaurants(json?.data?.cards[2]?.data?.data?.totalOpenRestaurants);
    setCarouselData(json?.data?.cards[0]?.data?.data?.cards);
    
  };

  console.log(resData);

  return resData?.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      
      <Carousel carouselData={carouselData} />
      {/* <Filters totalRes={totalRestaurants} resData={resData}/> */}
      <Body resData={resData} totalRes={totalRestaurants}/>
    </div>
  );
}

export default Home;
