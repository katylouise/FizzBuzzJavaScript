describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("should be able to recognise a number not divisible by 3", function() {
    expect(game.isDivisibleByThree(1)).toEqual(false);
  });

  it("should be able to recognise a number which is divisible by 3", function() {
    expect(game.isDivisibleByThree(3)).toEqual(true);
  });

  it("should be able to recognise a number not divisible by 5", function() {
    expect(game.isDivisibleByFive(2)).toEqual(false);
  });

  it("should be able to recognise a number which is divisible by 5", function() {
    expect(game.isDivisibleByFive(5)).toEqual(true);
  });

  it("should be able to recognise a number not divisible by 15", function() {
    expect(game.isDivisibleByFifteen(4)).toEqual(false);
  });

  it("should be able to recognise a number which is divisible by 15", function() {
    expect(game.isDivisibleByFifteen(15)).toEqual(true);
  });

  it("should return a number if not divisible by 3 or 5", function() {
    expect(game.fizzBuzz(1)).toEqual(1);
  });

  it("should return fizz if the number is divisible by 3", function() {
    expect(game.fizzBuzz(3)).toEqual("Fizz");
  });

  it("should return buzz if the number is divisible by 5", function() {
    expect(game.fizzBuzz(5)).toEqual("Buzz");
  });

  it("should return fizzbuzz if the number is divisible by 15", function() {
    expect(game.fizzBuzz(15)).toEqual("FizzBuzz");
  });
});
