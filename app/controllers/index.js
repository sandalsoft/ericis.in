var IndexController = Em.ObjectController.extend({

	lastUpdated: function() {
		return moment.unix(this.get('model.udpated_at')).calendar();
	}.property(),
});

export default IndexController;