'use strict'

describe('Game', function() {

  var game;
  var frame;
  var num;

  beforeEach(function() {
    frame = jasmine.createSpyObj('frame',['roll', 'completed', 'calcBonusRolls']);
    game = new Game(frame);
    num = 4;
  });

  describe('#constructor properties', function() {
    it('begins with empty frame array', function() {
      expect(game.frames).toEqual([]);
    });
    // it('has zero score', function() {
    //   expect(game.runningScore).toEqual(0);
    // });
    it('current frame is a frame', function() {
      expect(game.currentFrame).toBe(frame);
    });
  });

  describe('#gameRoll', function() {
    it('passes on the number to be logged', function() {
      game.gameRoll(num);
      expect(frame.roll).toHaveBeenCalledWith(num)
    });
    it('throws error if game already completed', function() {
      for(var i=1; i<=10; i++) { game.frames.push(frame) };
      expect(function(){
        game.gameRoll(num);
      }).toThrowError('Game is already over');
    });
  });

  describe('#updateFrame', function() {
    it('returns same frame if still in play', function() {
      frame.completed.and.returnValue(false);
      game.updateFrame();
      expect(game.currentFrame).toBe(frame);
    });
    it('returns new frame if frame completed', function() {
      frame.completed.and.returnValue(true);
      game.updateFrame();
      expect(game.currentFrame).not.toBe(frame);
    });
    it('logs a completed frame', function() {
      frame.completed.and.returnValue(true);
      game.updateFrame();
      expect(game.frames).toContain(frame);
    })
  });

  // describe('#currentGameScore', function() {
  //   it('adds up a double roll frame', function() {
  //     game.gameRoll(num);
  //     game.gameRoll(num);
  //     frame.completed.and.returnValue(true);
  //     game.updateFrame();
  //     console.log(game.frames);
  //     expect(game.currentGameScore()).toEqual(num*2);
  //   });
  // });



});
