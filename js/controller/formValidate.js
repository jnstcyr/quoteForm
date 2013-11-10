QuoteForm.ValidationController = Ember.ObjectController.extend({
   actions: {
    textValidate: function() {
      var valid = /^[a-z]+$/i.test(this.get('value')) ? valid = true : valid = false;
      this.$().next(".err").remove();

      if(!valid){
        this.$().parent().addClass("has-error");
        this.$().after("<span class='error'>Please enter a valid</span>");
      } else {
        this.$().removeClass("has-error")
      }
   },
    numberValidate: function() {
      var valid = /^[0-9]+$/i.test(this.get('value')) ? valid = true : valid = false;
      this.$().next(".err").remove();

      if(!valid){
        this.$().parent().addClass("has-error");
        this.$().after("<span class='error'>Numbers only please.</span>");
      } else {
        this.$().removeClass("has-error")
      }
   }
  }
});
