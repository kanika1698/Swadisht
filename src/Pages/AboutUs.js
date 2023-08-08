import React from "react";

const AboutUs = () => {
  return (
    <div>
      <h3 className="fw-bold fs-3 my-5">About Project</h3>

      <div className="row container text-start gx-5">
        <div class="card mx-5 my-3 shadow-lg" style={{ width: 20 + "rem" , height:20 + "rem" }}>
          <div class="card-body">
            <h5 class="card-title">Problem Statement</h5>
            <p class="card-text">
              Built a food ordering App which includes different restaurants and their menu also a user can 
              add items to cart and place order or cancel cart items. This App is focusing on using different React features and making it user friendly as much as possible.
            </p>
          </div>
        </div>
        <div class="card mx-5 my-3 shadow-lg" style={{ width: 20 + "rem" , height:20 + "rem" }}>
          <div class="card-body">
            <h5 class="card-title">Techstack</h5>
            <p class="card-text">
              <ul>
                <li>React JS</li>
                <li>Redux</li>
                <li>Bootstrap</li>
                <li>Css</li>
                <li>Jest & React Testing Library</li>
              </ul>
            </p>
          </div>
        </div>
        <div class="card mx-5 my-3 shadow-lg" style={{ width: 24 + "rem" , height:20 + "rem" }}>
          <div class="card-body">
            <h5 class="card-title">Features</h5>
            <p class="card-text">
              <ul>
                <li>Interacted with  Live Swiggy APIs to get data of
                    Different Restaurants available and their menu.</li>
                <li>Filters : - based on name , top rated and cuisines.</li>
                <li>Cart :- add to Cart , clear cart , remove from cart. (Redux)</li>
                <li>React toastify is used to give notification to user</li>
                <li>Shimmer UI - to make the user experience better.</li>
              </ul>
            </p>
          </div>
        </div>

        <div class="card mx-5 my-3 shadow-lg" style={{ width: 20 + "rem" , height:20 + "rem" }}>
          <div class="card-body">
            <h5 class="card-title">Future Enhancements</h5>
            <p className="card-text">Some of the improvemnet future versions can have</p>
            <p class="card-text">
              <ul>
                <li>Adding Payment Gateway</li>
                <li>Search By Location</li>
                <li>Adding coupons</li>
                <li>Use of Redux in more parts of application</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
