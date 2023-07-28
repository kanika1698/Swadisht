import { Outlet } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
//import RestaurantPage from "./Pages/RestaurantPage";



function App() {
  return (
    <div className="App">
    <Header/>
     <Outlet/>
     <Footer/>
    
    </div>
  );
}



export default App;
