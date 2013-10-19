var IndexRoute = Ember.Route.extend({
  setupController: function(controller) {
		$.ajax({
	    url: 'http://162.243.61.210/data.json',
	    type: 'GET',
	    dataType: 'JSON',
	    timeout: 2500,
	  }).then(function(json) {
	    controller.set('trip', json);
	  });
  },
});

export default IndexRoute;
