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
    costForTwo,
    cloudinaryImageId,
  } = res;

  const {
    slaString
  } = res?.sla

  const {
    restaurantId
  } = res?.feeDetails

  return (
    <>
    <Link to={{ pathname: `/restaurant/${restaurantId}`}} className="link">
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
                <li>{costForTwo}</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </Link>
 
    </>
  );
}

//Higher Order Component

export const withPromoted = (ResCard) => {
  return ({res}) => {
    return (
      <div>
        <label>OFF</label>
        <ResCard res={res}/>
      </div>
    )
  }
}


export default ResCard;
