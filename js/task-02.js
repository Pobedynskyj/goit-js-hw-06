const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const navItem = document.querySelector(`ul`);
console.log(navItem);

const navItemElPot = document.createElement(`li`);
navItemElPot.classList.add(`item`);
navItemElPot.textContent = `Potatoes`;

const navItemElMush = document.createElement(`li`);
navItemElMush.classList.add(`item`);
navItemElMush.textContent = `Mushrooms`;

const navItemElGarl = document.createElement(`li`);
navItemElGarl.classList.add(`item`);
navItemElGarl.textContent = `Garlic`;

const navItemElTom = document.createElement(`li`);
navItemElTom.classList.add(`item`);
navItemElTom.textContent = `Tomatos`;

const navItemElHerbs = document.createElement(`li`);
navItemElHerbs.classList.add(`item`);
navItemElHerbs.textContent = `Herbs`;

const navItemElCond = document.createElement(`li`);
navItemElCond.classList.add(`item`);
navItemElCond.textContent = `Condiments`;

navItem.append(navItemElPot, navItemElMush, navItemElGarl, navItemElTom, navItemElHerbs, navItemElCond);