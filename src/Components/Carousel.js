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
                  src={Image_Url + carousel.data.creativeId}
                  class="d-block w-10 resImage"
                  alt="..."
                />
              );
            })}
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
