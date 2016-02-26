function Airport(weatherStation) {
  this.capacity = 10;
  this.planes = [];
  this.weatherStation = typeof weatherStation !== 'undefined' ? weatherStation : new WeatherStation();
  this.errorMsg = '';
};

Airport.prototype.checkin = function(plane) {
  if (this._isStorm() || this._isFull()) {
    throw new Error(this.errorMsg);
  } else {
    this.planes.push(plane);
    plane.landed(this);
  };
};

Airport.prototype.checkout = function(plane) {
  if (this._isStorm() || this._planeAbsent(plane)) {
    throw new Error(this.errorMsg);
  } else {
    this.planes.splice(this._planeIndex(plane), 1);
    plane.departed(this);
  };
};


Airport.prototype._isFull = function() {
  if (this.planes.length >= this.capacity) {
    this.errorMsg = 'Airport is full';
    return true;
  } else {
    return false;
  }
};

Airport.prototype._isStorm = function() {
  if (this.weatherStation.isStormy()) {
    this.errorMsg = "It's too stormy";
    return true;
  } else {
    return false;
  };
};

Airport.prototype._planeIndex = function(plane) {
  return this.planes.indexOf(plane);
};

Airport.prototype._planeAbsent = function(plane) {
  if (this._planeIndex(plane) === -1) {
    this.errorMsg = "Plane is not at this airport";
    return true;
  } else {
    return false;
  };
};
