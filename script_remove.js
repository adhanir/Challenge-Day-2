var str = "almiraluthfi";

// menggunakan set
var set = new Set();
var words = str.split("");
words.forEach((ele) => {
  set.add(ele);
});
console.log(set);
