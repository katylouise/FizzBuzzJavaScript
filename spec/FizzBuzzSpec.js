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
  // it("should be able to play a Song", function() {
  //   player.play(song);
  //   expect(player.currentlyPlayingSong).toEqual(song);

  //   //demonstrates use of custom matcher
  //   expect(player).toBePlaying(song);
  // });

  // describe("when song has been paused", function() {
  //   beforeEach(function() {
  //     player.play(song);
  //     player.pause();
  //   });

  //   it("should indicate that the song is currently paused", function() {
  //     expect(player.isPlaying).toBeFalsy();

  //     // demonstrates use of 'not' with a custom matcher
  //     expect(player).not.toBePlaying(song);
  //   });

  //   it("should be possible to resume", function() {
  //     player.resume();
  //     expect(player.isPlaying).toBeTruthy();
  //     expect(player.currentlyPlayingSong).toEqual(song);
  //   });
  // });

  // // demonstrates use of spies to intercept and test method calls
  // it("tells the current song if the user has made it a favorite", function() {
  //   spyOn(song, 'persistFavoriteStatus');

  //   player.play(song);
  //   player.makeFavorite();

  //   expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  // });

  // //demonstrates use of expected exceptions
  // describe("#resume", function() {
  //   it("should throw an exception if song is already playing", function() {
  //     player.play(song);

  //     expect(function() {
  //       player.resume();
  //     }).toThrowError("song is already playing");
  //   });
  // });
});
