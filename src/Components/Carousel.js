import React from "react";
import "./Carousel.css";
import { Image_Url } from "../Utility/Constants";

function Carousel(props) {
  const { carouselData } = props;
  console.log(carouselData);

  return (
    <div className="carousel container-fluid">
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
       
         <div class="carousel-item d-flex active">
            {carouselData.map((carousel) => {
              return (
                
                  <img
                  src={Image_Url + carousel.imageId}
                  class=" resImage"
                  alt="..."
                />
                
                
              );
            })}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Carousel;
