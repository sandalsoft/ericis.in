var IndexRoute = Ember.Route.extend({
  model: function() {
  	 return Ember.$.getJSON('http://162.243.61.210/data.json');
  },
});

export default IndexRoute;
