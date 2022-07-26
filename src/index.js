module.exports = function reverse (n) {
    n = Math.abs(n);
    while (n % 10 === 0) {
      n = n / 10;
    }
    let string = n.toString();
    
    return string.split("").reverse().join("");
}
