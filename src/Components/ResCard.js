import React from "react";
import "./ResCard.css";
import { HiStar } from "react-icons/hi2";
import { Image_Url } from "../Utility/Constants";
import { Link } from "react-router-dom";

function ResCard(props) {
  const { res } = props;

  const {
    name,
    cuisines,
    avgRating,
    costForTwoString,
    slaString,
    cloudinaryImageId,
  } = res?.data;

  return (
    <>
    <Link to={"/restaurant"} className="link">
    <div class="card  resCard" style={{ width: 20 + "rem" }}>
        <img
          src={Image_Url + cloudinaryImageId}
          class="card-img-top image"
          alt="..."
        />

        <div class="card-body">
          <h5 class="card-title resName mb-0">{name}</h5>
          <p class="card-text text-break">{cuisines.join(", ")}</p>

          <div className="row">
            <ul className="resCardInfo row">
              <div className="col-4 resRating">
                <li>
                  <HiStar /> {avgRating}
                </li>
              </div>
              <div className="col-3">
                <li>{slaString}</li>
              </div>
              <div className="col-5">
                <li>{costForTwoString}</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </Link>
 
    </>
  );
}

export default ResCard;
