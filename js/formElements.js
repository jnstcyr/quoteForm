QuoteForm.States = Ember.ArrayController.create({
  	selectedState: "Wisconsin",
  	states: [ "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming", "Washington DC" ],
  	classNames: "form-control"
});
QuoteForm.Suffix = Ember.ArrayController.create ({
  selectedSuffix: "Suffix",
  suffix: ["Suffix", "CPA", "D.C.", "D.D.S.", "D.M.D.", "D.O.", "D.V.M.", "Ed.D.", "Esq.", "II", "III", "IV", "M.D.", "O.D.", "O.S.B.", "P.C.", "Ph.D.", "Ret.", "R.N.", "R.N.C.", "USA", "USAF", "USAFR", "USAR", "USCG", "USMC", "USMCR", "USN", "USNR"],
  classNames: "form-control"
});

QuoteForm.TextField = Ember.TextField.extend({
   focusOut: function() {
      var valid = /^[a-z]+$/i.test(this.get('value')) ? valid = true : valid = false;
      this.$().next(".err").remove();

      if(!valid){
        this.$().parent().addClass("has-error");
        this.$().after("<span class='error'>This field is required</span>");
      } else {
        this.$().removeClass("has-error")
      }
   }
});
QuoteForm.AddressField = Ember.TextField.extend({
   focusOut: function() {
      var valid = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/i.test(this.get('value')) ? valid = true : valid = false;
      this.$().next(".err").remove();

      if(!valid){
        this.$().parent().addClass("has-error");
        this.$().after("<span class='error'>This field is required</span>");
      } else {
        this.$().removeClass("has-error")
      }
   }
});
QuoteForm.NumberField = Ember.TextField.extend({
   focusOut: function() {
      var valid = /^[0-9]+$/i.test(this.get('value')) ? valid = true : valid = false;
      this.$().next(".err").remove();

      if(!valid){
        this.$().parent().addClass("has-error");
        this.$().after("<span class='error'>This field is required</span>");
      } else {
        this.$().removeClass("has-error")
      }
    }
});
QuoteForm.PhoneField = Ember.TextField.extend({
   focusOut: function() {
      var valid = /^([+0-9]{1,3})?([0-9]{10,11})$/i.test(this.get('value')) ? valid = true : valid = false;
      this.$().next(".err").remove();

      if(!valid){
        this.$().parent().addClass("has-error");
        this.$().after("<span class='error'>Phone is required (XXX)XXX-XXXX</span>");
      } else {
        this.$().removeClass("has-error")
      }
    },
     placeholder:"(XXX) XXX-XXXX",
     type:"phone",
     classNames:"form-control",
     required:"true",
     valueBinding:"phoneNumber",
     name:"phone_number",
     viewName:"phoneNumberField",
});
QuoteForm.ZipCodeField = Ember.TextField.extend({
   focusOut: function() {
      var valid = /^\d{5}$/.test(this.get('value')) ? valid = true : valid = false;
      this.$().next(".err").remove();

      if(!valid){
        this.$().parent().addClass("has-error");
        this.$().after("<span class='error'>Zip Code is required</span>");
      } else {
        this.$().removeClass("has-error")
      }
    },
    placeholder:"Zip Code",
    type:"text",
    classNames:"form-control",
    required:"true",
    valueBinding:"zipCode",
    name:"zip_code",
    viewName:"zipCodeField",
});
QuoteForm.EmailField = Ember.TextField.extend({
   focusOut: function() {
      var valid = /^[a-z0-9._-]+@[a-z]+.[a-z.]{2,5}$/i.test(this.get('value')) ? valid = true : valid = false;
      this.$().next(".err").remove();

      if(!valid){
        this.$().parent().addClass("has-error");
        this.$().after("<span class='error'>Please enter a valid email.</span>");
      } else {
        this.$().removeClass("has-error")
      }
    },
     placeholder:"Email Address",
     type:"email",
     classNames:"form-control",
     required:"true",
     valueBinding:"emailAddress",
     name:"email_address",
     viewName:"emailAddressField",
});
QuoteForm.DOBField = Ember.TextField.extend({
   focusOut: function() {
      var valid = /^[0-9]{1,2}-[0-9]{1,2}-[0-9]{4}$/i.test(this.get('value')) ? valid = true : valid = false;
      this.$().next(".err").remove();

      if(!valid){
        this.$().parent().addClass("has-error");
        this.$().after("<span class='error'>Please enter a valid date.</span>");
      } else {
        this.$().removeClass("has-error")
      }
    },
    placeholder:"mm/dd/yyyy",
    type:"text",
    classNames:"form-control",
    required:"true",
    valueBinding:"dateOfBirth",
    name:"date_of_birth",
    viewName:"dateOfBirthField",
});






