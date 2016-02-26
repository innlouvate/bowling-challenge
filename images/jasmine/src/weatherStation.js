function WeatherStation() {
};

WeatherStation.prototype.isStormy = function() {
  return ((Math.random() * 10) + 1) > 9
};
