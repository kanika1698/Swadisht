import logo from "../Utility/logo.jpg";
import "./Header.css";
import {  BsCart4, BsFillPostcardHeartFill } from "react-icons/bs";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";



const Header = () => {

  const cartItems = useSelector((store)=>store.cart.items)
  console.log(cartItems);

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
              <Link class="nav-link" aria-current="page" to={"/cart"} >
                <BsCart4  size={28}/><label className="mx-1 fs-6 fw-bold ">{cartItems.length}</label>
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
