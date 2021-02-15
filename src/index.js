import Foods from './Foods';
import {choice, remove} from './Helpers';

let fruit = choice(Foods);

console.log('I would like one ${fruit}, please.');
console.log("Here you go: ${fruit}");

let remaining = remove(Foods, fruit);
console.log('I am sorry, we are all out. We have ${remaining.length} left.');