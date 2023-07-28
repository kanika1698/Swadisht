import React, { useState } from "react";
import "./Body.css";
import ResCard from "./ResCard";
import "./Filter.css";
import { BsSearch } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";

function Body(props) {
  const { resData} = props;
  const [searchData, setSearchData] = useState("");
  const [filterData, setfilterData] = useState([]);
  const [search, setSearch] = useState(false);
  const [topRated, setTopRated] = useState(false);

  console.log("log", resData);

  return (
    <>
      <div className="margin">
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
          <div className="search input-group mt-3">
            <span class="input-group-text" id="inputGroup-sizing-default">
              <BsSearch />
            </span>
            <input
              type="text"
              placeholder="Restaurant Or Cuisines"
              className="form-control"
              value={searchData}
              onChange={(e) => {
                setSearchData(e.target.value);
                let listOfRes = resData.filter((res) =>
                  (res?.info?.name?.toLowerCase()
                  .includes(searchData.toLowerCase().trim()) 
                  || console.log(res?.info?.cuisines)?.includes(searchData.toLowerCase().trim()))
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
                <FaFilter size={22} />
              </li>
              <li class="nav-item">
                <button
                  class="nav-link fw-bold"
                  title="greater than 3.5*"
                  onClick={() => {
                    let listOfRes = resData.filter(
                      (res) => res?.info?.avgRating > 4.2
                    );
                    topRated ? setTopRated(false) : setTopRated(true);
                    setfilterData(listOfRes);
                    search ? setSearch(false) : setSearch(true);
                    searchData === ""
                      ? setSearchData("Top-Rated")
                      : setSearchData("");
                  }}
                >
                  {topRated ? "Show All" : "Top Rated"}
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div className="container  row">
        {search === false || searchData === ""
          ? resData?.map((res) => (
              <div className=" col-sm-3 col-lg-3">
                <ResCard res={res.info} />
              </div>
            ))
          : filterData?.map((res) => (
              <div className=" col-sm-3 col-lg-3">
                <ResCard res={res.info} />
              </div>
            ))}
      </div>
    </>
  );
}

export default Body;
