var _ = {
    map: function(list, callback) {
        let newList = [];
        if(Array.isArray(list)){
            for (let i=0; i<list.length; i++){
                newList.push(callback(list[i]));
            }
        }
        else{
            for (let j in list){
                newList.push(callback(list[j]));
            }
        }
        return newList;
    },
    reduce: function(list, callback, initial) { 
      let i = 0;
      if(!initial){
          amount = list[0];
          i = 1
      }
      for (; i<list.length; i++){
          amount = callback(amount, list[i]);
      }
      return amount;
    },
    find: function(list, callback) {
      let match;
      for (let i=0; i<list.length; i++){
        if (callback(list[i])){
          match = list[i];
          break;
        }
      }
      return match;
    },

    filter: function(arr, callback) {
        let newarr = [];
        for (let i of arr){
            if(callback(i)){
                newarr.push(i);
            }
        }
        return newarr;
    },

    reject: function(arr, callback) {
        let newarr = [];
        for (let i of arr){
            if(!(callback(i))){
                newarr.push(i);
            }
        }
        return newarr;
    }
  }
 // you just created a library with 5 methods!

var evens = _.filter([1,2,3,4,5,6], function(num){
    return num % 2 == 0;
});
console.log(evens);

console.log(_.map([1, 2, 3], function(num){ return num * 3; }));
console.log(_.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; }));

var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num }, 0);
console.log(sum);
var product = _.reduce([4, 5, 6], function(memo, num){ return memo * num });
console.log(product);

var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(even);

var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(odds);