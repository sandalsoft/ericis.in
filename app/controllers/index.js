var IndexController = Em.ObjectController.extend({

	lastUpdated: function() {
		return moment.unix(this.get('model.udpated_at')).fromNow();
	}.property(),
});

export default IndexController;