import React from "react";
import "./Filter.css";

function Filters({totalRes , resData}) {
  return (
    <div className="margin">
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <a class="navbar-brand textNumber" href="#">
          {totalRes} restaurants
        </a>
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
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Relevance
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Delivery Time
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Rating
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Cost : Low to High
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Cost : High to Low
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Filters;
