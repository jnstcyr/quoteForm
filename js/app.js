QuoteForm = Ember.Application.create();

QuoteForm.Router.map(function () {
  this.resource('infoForm', {path:'/'}, function(){
  	this.resource('modalForm', function(){
	  });
  });
});

QuoteForm.ApplicationRoute = Ember.Route.extend({
    actions: {
        showModal: function() {
          this.transitionTo('modalForm');
          $('.checkbox-inline').addClass('hidden');
          $('.priorAddBtn').removeClass('hidden');
        }
    }
});

QuoteForm.ModalFormView = Ember.View.extend({
    templateName: "modalForm",
    didInsertElement: function() {
        this.$('#formModal').modal('show');
        this.$('#formModal').on('hidden.bs.modal');
    },
    close: function() {        
        this.$(".close").click();
    }
});
