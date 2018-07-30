"use strict";

let makeGridItem = (item, index) => {
   let sold = `<a href="http://google.com" class="cake-message buy">BUY</a>`;
   let purchased = item.purchased;
   if (purchased) {
      sold = `<span class="cake-message soldout">SOLD OUT!</span>`;
   }

   let productComponent = `<div id="card--${index}" class="card flex-item">
      <h3>#${index} CakeType: ${item.typeId}</h3>
      <div class="card-img" style="background-image: url('images/${item.image}')"></div>
      <div class="card-body">
       <h5 class="card-title">${item.flavor}  ${item.kind}</h5>
       <p class="card-text">${item.price}</p>
         ${sold}
         <p class="card-text">${item.description}</p>
      </div>
   </div>`;

   return productComponent;

};

module.exports = { makeGridItem };