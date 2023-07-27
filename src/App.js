import { Outlet } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";
//import RestaurantPage from "./Pages/RestaurantPage";



function App() {
  return (
    <div className="App">
    <Header/>
     <Outlet/>
    
    </div>
  );
}



export default App;
