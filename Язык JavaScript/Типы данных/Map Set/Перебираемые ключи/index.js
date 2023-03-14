'use strict';

let map = new Map();

map.set("name", "John");

// Возвращает итерируемый объект , а не массив
let keys = map.keys();

keys.push("more");