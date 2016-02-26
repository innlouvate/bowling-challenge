'use strict'

describe('Game', function() {

  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
  });

  describe('has initialised values', function() {
    it('begins with empty frame array', function() {
      expect(game.frames).toEqual([]);
    });
    it('has zero score', function() {
      expect(game.runningScore).toEqual(0);
    });
  });

});
