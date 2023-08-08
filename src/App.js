import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Provider } from "react-redux";
import appStore from "./Utility/appStore";


const App = () => {
  return (
     <Provider store={appStore}>
      <div className="App">
        <Header />
        <Outlet />
        <Footer />
      </div>
     </Provider>
  );
};

export default App;
