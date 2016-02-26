function Frame() {
  this.rolls = [];
  // this.frameScore = 0;
  this.pins = 10;
  this.bonus = 0;
  this.bonusRolls = 0;
  // this.weatherStation = typeof weatherStation !== 'undefined' ? weatherStation : new WeatherStation();
  // this.errorMsg = '';
};

Frame.prototype.roll = function(num) {
  if(this.completed()) {
    throw new Error('Frame already completed');
  } else
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

Frame.prototype.frameScore = function() {
  return this.rolls.reduce(function(a, b) { return a + b; }, 0);
}

Frame.prototype.strike = function() {
  return this.rolls[0] === 10;
}

Frame.prototype.spare = function() {
  return this.frameScore() === 10;
}

Frame.prototype.calcBonusRolls = function() {
  if(this.strike()) {
    this.bonusRolls = 2;
  } else if(this.spare()) {
    this.bonusRolls = 1;
  }
}
