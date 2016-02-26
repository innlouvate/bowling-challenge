function Airplane() {
  this.inflight = false;
  this.location = null;
}

Airplane.prototype.landed = function(airport) {
  this.inflight = false;
  this.location = airport;
}

Airplane.prototype.departed = function(airport) {
  this.inflight = true;
  this.location = null;
}
