'use strict';

describe('Frame', function() {

  var frame;
  var num;

  beforeEach(function() {
    frame = new Frame();
    num = 4;
  });

  describe('#constructor properties', function() {
    it('to have empty rolls array', function() {
      expect(frame.rolls).toEqual([]);
    });
    // it('frame score to be zero', function() {
    //   expect(frame.frameScore).toEqual(0);
    // });
    it('starts with 10 pins', function() {
      expect(frame.pins).toEqual(10);
    });
  });

  describe('#roll', function() {
    it('number is added to the rolls array', function() {
      frame.roll(num);
      expect(frame.rolls).toContain(num);
    });
    it('pins are reduced by the number', function() {
      frame.roll(6);
      expect(frame.pins).toEqual(4);
    });
    it('throws an error if roll number is higher than pins', function() {
      expect(function() {
        frame.roll(11);
      }).toThrowError('Impossible play');
    });
    it('throws an error if frame already completed', function() {
      frame.roll(10);
      expect(function() {
        frame.roll(1);
      }).toThrowError('Frame already completed');
    });
  });

  describe('#completed', function() {
    it('is false to begin with', function () {
      expect(frame.completed()).toBe(false);
    });
    it('is true after two rolls not adding to 10', function() {
      frame.roll(1);
      frame.roll(1);
      expect(frame.completed()).toBe(true);
    });
    it('is true after a strike', function() {
      frame.roll(10);
      expect(frame.completed()).toBe(true);
    });
  });

  describe('#frameScore', function() {
    it('adds the rolls array', function() {
      frame.roll(num);
      frame.roll(num);
      expect(frame.frameScore()).toEqual(num*2);
    });
  });

});
