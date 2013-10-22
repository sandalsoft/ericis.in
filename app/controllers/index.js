var IndexController = Em.ObjectController.extend({

	lastUpdated: function() {
		return moment.unix(this.get('model.udpated_at')).fromNow();
	}.property(),

	nextTripDate: function() {
		var next_trip_epoch = this.get('model.next_start_date');
		return moment.unix(next_trip_epoch).format('MMMM Do');
	}.property(),

	nextCity: function() {
		var next_city = this.get('model.next_city');
		if (next_city === 'Chicago, IL') {
			return "home";
		}
		else {
			return next_city;
		}
	}.property(),

	toNextCity: function() {
		var next_city = this.get('model.next_city');
		if (next_city === 'Chicago, IL') {
			return "";
		}
		else {
			return "to ";
		}
	}.property(),


	setNextCity: function() {
		this.set('latitude', this.get('next_latitude'));
		this.set('longitude', this.get('next_longitude'));
	}
});

export default IndexController;