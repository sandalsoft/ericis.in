var MapView = Ember.View.extend({
  didInsertElement: function(latitude, longitude) {
    // var lat = latitude; //this.get("latitude");
    // var lon = longitude; //this.get("longitude");
    var lat = this.get("latitude");
    var lon = this.get("longitude");

    // this is required for the map to be rendered
    this.$().css({ width: "600px", height: "300px" });
    // create the LatLng object that will be used to center both the map and the marker
    var center = new google.maps.LatLng(lat,lon);
    // some options
    var options = {
      disableDefaultUI: true,
      center: center,
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    google.maps.visualRefresh = true;


    // create the map
    var map = new google.maps.Map(this.$()[0], options);
    // create the marker
    var marker = new google.maps.Marker({ position: center, 
        map: map, 
        animation: google.maps.Animation.DROP,
        draggable: false });
    // save them both for later use
    this.set("marker", marker);
    this.set("map", map);
    var that = this;
    // add a listener on the "drag" event of the marker
    google.maps.event.addListener(marker, "drag", function() {
      // retrieve the current position of the marker
      var position = marker.getPosition();
      // update the latitude/longitude properties
      that.setProperties({
        latitude: position.lat(),
        longitude: position.lng()
      });
    });
    // listeners used to know when we're dragging
    google.maps.event.addListener(marker, "dragstart", function() { that.set("dragging", true); });
    google.maps.event.addListener(marker, "dragend", function() { that.set("dragging", false); });
  },
  
  willDestroyElement: function() {
    // make sure we clear all listeners
    google.maps.event.clearInstanceListeners(this.get("marker"));
  },
  
  coordinatesChanged: function() {
    // create a new position object from the marker's position
    var position = new google.maps.LatLng(this.get("latitude"), this.get("longitude"));
    // only center the map when the position has been changed by changing the textfields
    if (!this.get("dragging")) { this.get("map").setCenter(position); }

    // update the position of the marker
    this.get("marker").setPosition(position);
    this.get("map").panTo(position);
  }.observes("latitude", "longitude")
});

export default MapView;