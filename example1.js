function parseNumbers(intStrs) {
  var array = []
  for (var i = 0; i < intStrs.length; i++) {
    array.push(parseInt(intStrs[i]));
  }
  return array;
}

console.log(parseNumbers(['10']))
console.log(parseNumbers(['-1','0','1']))

// var fucnt = function(n) {
//   return parseInt(n)
// }
