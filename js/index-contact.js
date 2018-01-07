$(".ajax-form").validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      email: {
        required: true,
        email: true,
      },
      message: {
        required: true,
        minlength: 5,
    },
  },
  errorPlacement: function(error, element) {
  },
  submitHandler: function (form) {
      var protocol = window.location.protocol.split(':');
      var URL = protocol[0] + "://getsimpleform.com/messages/ajax?form_api_token=c08c7cb50b20f7a2e8b79dc8fe967687";
      $.ajax({
          dataType: "jsonp",
          url: URL,
          data: $(".ajax-form").serialize()
      }).done(function (res) {
          //callback which can be used to show a thank you message
          //and reset the form
          console.log(res);
          swal({
            title: "Sent Successful!",
            text: "Thnak You For Contacting Us",
            icon: "success",
          });
          // $(".ajax-form").show();
          // $(".form-thank-you").fadeIn("400");
      });
      //return false; //to stop the form from submitting
  }
});

$(function(){

setTimeout(function(){
$('div').last().remove();
}, 1000);

});