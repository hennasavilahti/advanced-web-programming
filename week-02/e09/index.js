import { add } from './add.js';
import { subtract } from './subtract.js';

const displayResults = (a, b) => {
  console.log(add(a, b));
  console.log(subtract(a, b));
};

displayResults(7, 5);
