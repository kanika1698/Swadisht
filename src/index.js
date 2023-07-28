import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Cart from './Pages/Cart';
import RestaurantPage from './Pages/RestaurantPage';
import Error from './Pages/Error';
import App from './App';

const appRouter = createBrowserRouter([
  {
    path : "/",
    element: <App/>,
    children : [
      {
        path : "/",
        element : <Home/>
      },
      {
        path : "/about",
        element : <AboutUs/>
      },
      {
        path : "/relevence",
        element : <Home/>
      },
      {
        path : "/cart",
        element : <Cart/>
      },
      {
        path : "/restaurant/:id",
        element : <RestaurantPage/>
      }
    ],
    errorElement : <Error/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={appRouter} />
);