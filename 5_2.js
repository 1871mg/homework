'use strict';

var A = [1, 2];
var B = [2, 3];
var C = A.concat(B);

console.log('Первый массив содержит следующие данные: ' + A);
console.log('Второй массив содержит следующие данные: ' + B);

function uniq(arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    obj[str] = true; 
  }
  return Object.keys(obj);
}

C = uniq(C);
console.log('Объединённый массив выглядит следующим образом: ' + C );