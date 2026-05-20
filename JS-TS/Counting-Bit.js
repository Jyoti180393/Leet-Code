document.getElementById("title").innerHTML = "Counting Bits";

function countBits(num) {
  const res = new Uint8Array(num + 1);
  for (let i = 0; i < res.length; i++) {
    // res[i] = res[Math.floor(i / 2)] + (i % 2);
    // can be written like this, using division and modulus operators
    res[i] = res[i >> 1] + (i & 1);
    // can also be written like this, using bitwise operators for better performance
  }
  return [...res];
}
console.log(countBits(2));
console.log(countBits(10));
