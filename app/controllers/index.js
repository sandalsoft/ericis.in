var IndexController = Em.ObjectController.extend({

    lastUpdated: function() {
        return moment.unix(this.get('model.udpated_at')).fromNow();
    }.property(),

    nextTripDate: function() {
        var next_trip_epoch = this.get('model.next_start_date');
        console.log("tits: " + moment.unix(next_trip_epoch).utc().format('MMMM Do'))
        return moment.unix(next_trip_epoch).utc().format('MMMM Do');
    }.property(),

    nextCity: function() {
        var next_city = this.get('model.next_city');
        if (next_city === 'Chicago, IL') {
            return "home";
        } else {
            return next_city;
        }
    }.property(),

    setMarkerToCity: function(lat, lon) {
        this.set('latitude', lat);
        this.set('longitude', lon);
    },

    toNextCity: function() {
        var next_city = this.get('model.next_city');
        if (next_city === 'Chicago, IL') {
            return "";
        } else {
            return "to ";
        }
    }.property(),
});

export default IndexController;
