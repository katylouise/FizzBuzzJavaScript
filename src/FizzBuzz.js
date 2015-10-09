function Game() {
}

Game.prototype.isDivisibleByThree = function(number) {
  return number % 3 === 0 ? true : false;
};

Game.prototype.isDivisibleByFive = function(number) {
  return number % 5 === 0 ? true : false;
};

Game.prototype.isDivisibleByFifteen = function(number) {
  return number % 15 === 0 ? true : false;
};

Game.prototype.fizzBuzz = function(number) {
  var answer = "";

  if(this.isDivisibleByThree(number)) {
    answer += "Fizz";
  }
  if(this.isDivisibleByFive(number)) {
    answer += "Buzz";
  }
  return answer || number;
}
