var validateNext = {
  zip : function(){
      var value = $('.zip_code').val();
      var valid = /^\d{5}$/.test(value) ? valid = true : valid = false;
      
       if(!valid){
          if($('.has-error').length === 0){
             $('.zip_code').addClass("has-error");
             $('.zip_code').after("<span class='error'>Zip Code is required</span>");
           }
       } else {
          $('.modal-content').addClass('hidden');
          $('.modal-content').eq(1).removeClass('hidden');
          $('.zip_code').removeClass("has-error");
        }
  },
  address : function(){
      var value = $('#prior_address_primary').val();
      var valid = /^[A-Za-z0-9]$/i.test(value) ? valid = true : valid = false;
      
       if(!valid){
          if($('.has-error').length === 0){
            $('#prior_address_primary').addClass("has-error");
            $('#prior_address_primary').after("<span class='error'>Address is required</span>");
          }
       } else {
          $('.modal-content').addClass('hidden');
          $('.modal-content').eq(3).removeClass('hidden');
          $('#prior_address_primary').removeClass("has-error");
        }
  },
  next: function(i){
      $('.modal-content').addClass('hidden');
      $('.modal-content').eq(i+1).removeClass('hidden');
  },
  startOver: function(){
      $('.modal-content').addClass('hidden');
      $('.modal-content').eq(0).removeClass('hidden');
      $('.zip_code').val('');
      $('.address_one').val('');
      $('.address_two').val('');
  }
};