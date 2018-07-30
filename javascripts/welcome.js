"use strict";
let welcomeData = require('./welcome-data');

let showWelcome = () => {
   const welcomeObj = welcomeData;

   let storeDesc = `<h3>We bake the most delicious pies and cake varieties like`;

   //make a shortcut
   const cakeTypeArray = welcomeObj.cakeType;
   cakeTypeArray.forEach((element, index, cakeTypeArray) => {
      //the sentence should build with commas between each kind and the word and at the end.
      //ex. apples, cookies, cakes, fruits, and chips

      //this does not run the first time through
      if(index !== 0){
         //add the comma or the word and
         //ternary condition
         storeDesc += (index !== cakeTypeArray.length - 1) ? `, ` : `, and `;
      }


      storeDesc += ` ${element.name}-${element.cake}`;
   });

   let welcomeComponent = `<h2 class="brand">${welcomeObj.name}!</h2>
   ${storeDesc}
   .</h3>`;

   return welcomeComponent;
};

module.exports = {showWelcome};