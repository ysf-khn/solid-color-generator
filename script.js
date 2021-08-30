'use strict';

const body = document.querySelector('body');
const btnSolid = document.querySelector('.btn-solid');

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;

const changeColor = function () {
  body.style.backgroundColor = randomColor();
};

btnSolid.addEventListener('click', changeColor);
