describe('WeatherStation', function() {

  var weatherStation;

  beforeEach(function(){
    weatherStation = new WeatherStation();
    spyOn(Math, 'random').and.returnValue(0.8);
  });

  it('returns true when stormy', function(){
    Math.random.and.returnValue(0.9);
    expect(weatherStation.isStormy()).toBe(true);
  });

  it('returns false when not stormy', function(){
    expect(weatherStation.isStormy()).toBe(false);
  });

});
