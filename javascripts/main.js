"use strict";

let welcomeTemplate = require('./welcome');

let welcomeDiv = document.createElement("header");
welcomeDiv.innerHTML = welcomeTemplate.showWelcome();
document.getElementById('welcome').appendChild(welcomeDiv);