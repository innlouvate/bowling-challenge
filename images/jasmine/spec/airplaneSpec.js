describe('Airplane', function() {

  var plane;
  var airport;

  beforeEach(function() {
    plane = new Airplane();
  });

  describe('has initialised values', function() {
    it('begins as not inflight', function() {
      expect(plane.inflight).toEqual(false);
    });
    it('has no initial location', function() {
      expect(plane.location).toBeNull();
    });
  });

  describe('landed / checkin to airport', function() {
    it('inflight status is now false', function() {
      plane.landed(airport)
      expect(plane.inflight).toEqual(false);
    });
    it('location status is now respective airport', function() {
      plane.landed(airport)
      expect(plane.location).toEqual(airport);
    });
  });

  describe('departing / checkout of airport', function() {
    it('inflight status is now true', function() {
      plane.departed(airport)
      expect(plane.inflight).toEqual(true);
    });
    it('location status is now null', function() {
      plane.departed(airport)
      expect(plane.location).toEqual(null);
    });
  });

});
