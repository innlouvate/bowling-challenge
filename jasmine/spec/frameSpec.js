'use strict';

describe('Frame', function() {

  var frame

  beforeEach(function() {
    frame = new Frame();
  });

  describe('has initialised values', function() {
    it('to have empty rolls array', function() {
      expect(frame.rolls).toEqual([]);
    });
    it('frame score to be zero', function() {
      expect(frame.frameScore).toEqual(0);
    });
    it('starts with 10 pins', function() {
      expect(frame.pins).toEqual(10);
    });
  });

  describe('#roll', function() {
    it('number is added to the rolls array', function() {
      frame.roll(5);
      expect(frame.rolls).toContain(5);
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

});
