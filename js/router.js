QuoteForm.Router.map(function () {
  this.resource('index', { path: '/' }, function(){
  	this.resource('modalForm', function(){
  		this.resource('form', { path: ":form_id"});
  	});
  });
});

QuoteForm.ApplicationRoute = Ember.Route.extend({
    actions: {
        showGroups: function() {
          this.transitionTo('modalForm');
        }
    }
});