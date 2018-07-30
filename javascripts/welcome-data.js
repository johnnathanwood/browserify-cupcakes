"use strict";
// simple example of using object to populate template
let welcomeData = {
   name: "The Pie Slice-ery",
   cakeType: [
      {
         name: "Zebra Cakes",
         cake: "Chocolate",
         topping: "Vanilla",
      },
      {
         name: "Happy Camper",
         cake: "Chocolate",
         topping: "Mint"
      },
      {
         name: "Creme Rolls",
         cake: "Vanilla",
         topping: "Strawberry"
      },
      {
         name: "Cosmic Brownies",
         cake: "Chocoloate",
         topping: "Spinkles"
      }
   ]
};

module.exports = welcomeData;