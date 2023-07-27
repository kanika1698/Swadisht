import logo from "../Utility/logo.jpg";
import "./Header.css";
import { BsSearch, BsCart4, BsFillPostcardHeartFill } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import { BiLogIn } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-white nav">
      <div class="container-fluid">
        <a class="navbar-brand logo" href="#">
          <img src={logo} alt="logo" width="100" height="100" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse navlist" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item mx-3">
              <Link class="nav-link active" aria-current="page" to={"/"} >
                <IoHome size={28} />
              </Link>
            </li>
            <li class="nav-item mx-3">
              <Link class="nav-link" to={"/about"}>
                <BsFillPostcardHeartFill size={28} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
