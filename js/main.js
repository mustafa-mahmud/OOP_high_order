'use strict';

import UI from './classes/UI.js';

const mainEl = document.getElementById('main');
const personContainerEl = document.getElementById('person-container');
const addUserEl = document.getElementById('add-user');
const doubleEl = document.getElementById('double');
const showMillionairesEl = document.getElementById('show-millionaires');
const sortEl = document.getElementById('sort');
const calculateWealthEl = document.getElementById('calculate-wealth');
const wealthEl = document.getElementById('wealth');
const totalEl = document.getElementById('total');
const resetEl = document.getElementById('reset');

// const dataCl = new Data();
const uiCl = new UI(mainEl, personContainerEl, wealthEl, totalEl);

function init() {
  uiCl.display(5);
}

/////////////////
init();

addUserEl.addEventListener('click', () => uiCl.display());
doubleEl.addEventListener('click', () => uiCl.moneyDouble());
showMillionairesEl.addEventListener('click', () => uiCl.showMillinaires());
sortEl.addEventListener('click', () => uiCl.showSort());
calculateWealthEl.addEventListener('click', () => uiCl.showWealth());
resetEl.addEventListener('click', () => {
  uiCl.showReset();
});

//important===============
/* const h1El = document.querySelector('h1');

let arr1 = [1, 2];
let arr2 = [3, 4];

h1El.addEventListener('click', function () {
  arr2 = [...arr1];
  arr2.push(5);

  console.log(arr1);
  console.log(arr2);
  debugger;
}); */
