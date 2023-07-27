import React, { useState } from "react";
import "./Body.css";
import ResCard from "./ResCard";
import "./Filter.css";
import { BsSearch } from "react-icons/bs";
import {FaFilter} from "react-icons/fa"

function Body(props) {
  const { resData, totalRes } = props;
  const [searchData, setSearchData] = useState("");
  const [filterData, setfilterData] = useState([]);
  const [search, setSearch] = useState(false);



  return (
    <>
      <div className="margin">
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div className="search input-group mt-3">
      <span class="input-group-text" id="inputGroup-sizing-default"><BsSearch/></span>
        <input
          type="text"
          placeholder="search"
          className="form-control"
          value={searchData}
          onChange={(e) => {
            setSearchData(e.target.value);
            let listOfRes = resData.filter((res) =>
              res?.data?.name
                ?.toLowerCase()
                .includes(searchData.toLowerCase().trim())
            );
            console.log(searchData);
            console.log(listOfRes);
            setSearch(true);
            setfilterData(listOfRes);
            console.log(filterData);
          }}
        />
      </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav navItems textFamily">
              <li class="nav-item active mx-2 my-2">
                <FaFilter size={22}/>
              </li>
              <li class="nav-item">
                <button class="nav-link" title="less than 30 Mins" onClick={() => {
                   let listOfRes = resData.filter((res) => res?.data?.maxDeliveryTime < 30);
                   setfilterData(listOfRes); 
                   setSearch(true);
                  }}>
                  Delivery Time
                </button>
              </li>
              <li class="nav-item">
                <button class="nav-link" title="greater than 3.5*" onClick={() => {
                  let listOfRes = resData.filter((res) => res?.data?.avgRating > 4);
                  setfilterData(listOfRes);   
                  setSearch(true);
                }}>
                 Top Rated
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
     
      <div className="container  row">
        {search === false ||  searchData === ""
          ? resData?.map((res) => (
              <div className=" col-sm-3 col-lg-3">
                <ResCard res={res} />
              </div> 
            ))
          : filterData?.map((res) => (
              <div className=" col-sm-3 col-lg-3">
                <ResCard res={res} />
              </div>
            ))}
      </div>
    </>
  );
}

export default Body;
