module.exports = function reverse (n) {  
  n = (n > 0) ? n : ~n + 1;
  let arr = n.toString().split('');   
  return Number(arr.reverse().join('')); 
}
