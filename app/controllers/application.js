var ApplicationController = Em.ObjectController.extend({
	lastUpdated: function() {
		content.log('fuffffff');
		return "fuckme";
		// return moment().format(1382147702);
  }.property(),
});

export default ApplicationController;