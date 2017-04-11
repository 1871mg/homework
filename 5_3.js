'use strict';

var numbers = [1, -2, 6, 67, -7, 8, -23, 2, 5, 9, 2, -14, 2, 18, 2, -20];
var negArr = numbers.filter(function(number) { return number < 0;});
console.log(numbers);
console.log(negArr);
