function Frame() {
  this.rolls = [];
  this.frameScore = 0;
  this.pins = 10;
  // this.weatherStation = typeof weatherStation !== 'undefined' ? weatherStation : new WeatherStation();
  // this.errorMsg = '';
};

Frame.prototype.roll = function(num) {
  if(num > this.pins) {
    throw new Error('Impossible play');
  } else {
    this.rolls.push(num);
    this.pins -= num;
  }
}

Frame.prototype.completed = function() {
  return this.pins <= 0 || this.rolls.length === 2;
};
