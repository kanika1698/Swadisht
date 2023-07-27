import React from "react";

const MenuCard = ({ menuCard }) => {
  console.log(menuCard);
  
  console.log(menuCard[1]?.card?.card?.itemCards[0]?.card?.info?.name);

  // for(let i=1 ;i<menuCard-2;i++){
  //   let item = menuCard[i]?.card?.card?.itemCards[1]?.card?.info
  //   console.log(item);
  // }

  //const {name} = menuCard[1]?.card?.card?.itemCards[0]?.card?.info?.name
  //console.log(name);

  

  return (
    <div>
      {
        <div class="card mb-3" style={{ maxWidth: 100 + "%" }}>
          <div class="row g-0">
            <div class="col-md-8">
              <div class="card-body">
                <p class="card-title text-start">"name</p>
                <p class="card-text text-start">"name"</p>
                <p class="card-text text-start">
                  <small class="text-body-secondary">"name"</small>
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <img src="..." class="img-fluid rounded-end" alt="..." />
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default MenuCard;
