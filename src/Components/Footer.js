import logo from "../Utility/logo.jpg";
import { Link } from "react-router-dom";


const Footer = () => {
  
  return (
    <div class="card">
  <div class="card-header">
    <img src={logo} width="100" height="100"/> 
    <h5>All the resturants presenting their tasty meals on one site</h5>
    <Link to={"/about"}>More About Swadisht</Link>
  </div>
</div>
  )
}
export default Footer;