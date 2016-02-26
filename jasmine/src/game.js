function Game(frame) {
  this.frames = [];
  // this.runningScore = 0;
  this.currentFrame = frame || new Frame();
}

Game.prototype.gameRoll = function(num) {
  if(this.over()) {
    throw new Error('Game is already over');
  } else {
    this.addBonus(num);
    this.currentFrame.roll(num);
    this.updateFrame();  
  }
}

Game.prototype.over = function() {
  return this.frames.length >= 10;
}

Game.prototype.finalFrame = function() {
  return this.frames.length === 9;
}

Game.prototype.updateFrame = function() {
  if(this.currentFrame.completed()) {
    this.currentFrame.calcBonusRolls();
    this.frames.push(this.currentFrame);
    if(this.over()) {
      return 'score';
    } else if(this.finalFrame()) {
      this.currentFrame = new FinalFrame();
    } else {
      this.currentFrame = new Frame();
    }
  }
}

Game.prototype.currentGameScore = function() {
  var gameScore = 0;
  this.frames.forEach(function(frame) {
    gameScore += frame.frameScore() + frame.bonus;
  });
  return gameScore;
}

Game.prototype.addBonus = function(rollNum) {
  this.frames.forEach(function(frame) {
    if(frame.bonusRolls > 0) {
      frame.bonus += rollNum;
      frame.bonusRolls -= 1;
    }
  });
}





// Game.prototype.currentFrame = function() {
//   this._incompleteFrame() || new Frame();
// }
//
// Game.prototype._incompleteFrame = function() {
//   if(!this.frames.last.completed) {
//     return this.frames.last;
//   }
// }



// Game.prototype.callCurrentFrame = function() {
//   if(this.over()) {
//     return nil;
//   } else if(this.currentFrame.completed) {
//
//   } else {
//     this.frameInPlay || new Frame();
//   }
// }
