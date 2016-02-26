'use strict'

describe('Scoring', function() {

  var game;
  var frame;
  var num;

  beforeEach(function() {
    frame = new Frame();
    game = new Game(frame);
    num = 4;
  });


  describe('#currentGameScore', function() {
    it('adds up a double roll frame', function() {
      game.gameRoll(num);
      game.gameRoll(num);
      expect(game.currentGameScore()).toEqual(num*2);
    });
    it('adds up a strike followed by non-special frame', function() {
      game.gameRoll(10);
      game.gameRoll(num);
      game.gameRoll(num);
      expect(game.currentGameScore()).toEqual(10+4*num);
    });
    it('adds up a spare followed by non-special frame', function() {
      game.gameRoll(0);
      game.gameRoll(10);
      game.gameRoll(num);
      game.gameRoll(num);
      expect(game.currentGameScore()).toEqual(10+3*num);
    });
  });

});
