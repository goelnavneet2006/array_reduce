var list = [];

for (var i = 0; i < 3; i++) {
    list[i] = function () {console.log(i)};
}

list[0]() //0 //3
list[1]() //1 //3
list[2]() //2 //3

// ====

var total = [0, 1, 2, 3].reduce(function(sum, value) {
  return sum + value;
}, 0);
// total is 6

var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
  return a.concat(b);
}, []);
// flattened is [0, 1, 2, 3, 4, 5]

// insert your implementation of sameReduce() which is identical to native
// reduce() to make following code work without error

Array.prototype.sameReduce = function(fnCallback, initVal) {
    If (!fnCallback || typeof fnCallback !== “function”) {
      Throw “invalid function”;
      return;
    }

    Var output;
    var i = 0;
    If (initVal === undefined) {
      output = initVal;
    } else {
      Output = this[i];
      i++;
    }
    for (; i < this.length; i++) {
      output = fnCallback(output, this[i]);
    }
    Return output;
}

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call

// 0:0, 0:1, 1:2, 3:3
var total = [0, 1, 2, 3].sameReduce(function(sum, value) {
  return sum + value;
}, 0);
// total is 6

var flattened = [[0, 1], [2, 3], [4, 5]].sameReduce(function(a, b) {
  return a.concat(b);
}, []);
// flattened is [0, 1, 2, 3, 4, 5]
