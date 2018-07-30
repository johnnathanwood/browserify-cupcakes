"use strict";

let inventory = require('./cakeInventory');

//create initial object to hold all the 'bakery' methods
let bakery = {};


//get inventory
bakery.getInventory = () => {
   //give the inventory back to who called it
   return inventory;
};

bakery.addItem = () => {
   //code to add a new item
};

bakery.removeItem = () => {
   //code to remove an item from data source
};

console.log("bakery", bakery);

module.exports = bakery;