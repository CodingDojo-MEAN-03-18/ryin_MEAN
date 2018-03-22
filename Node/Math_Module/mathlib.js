module.exports = function (){
  return {
    add: function(num1, num2) {
         console.log(num1+num2);
         return num1 + num2;
    },
    multiply: function(num1, num2) {
         console.log(num1 * num2);
         return num1 * num2;
    },
    square: function(num) {
         console.log(num * num);
         return num * num;
    },
    random: function(num1, num2) {
         console.log(Math.floor(Math.random()*((Math.floor(num2) - Math.ceil(num1))+num1)));
         return Math.random()*((Math.floor(num2) - Math.ceil(num1))+num1);
    }
  }
};
