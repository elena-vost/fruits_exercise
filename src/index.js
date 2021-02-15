import Foods from './Foods';
import {choice, remove} from './Helpers';

let fruit = choice(Foods);

console.log("I'd like one ${fruit}, please.");
console.log("Here you go: ${fruit}");