import jquery from "jquery"
window.jQuery = jquery
window.$ = jquery

// document.addEventListener('turbolinks:load', () => {})
$(document).mouseover(function(){
  $("#form").validate({
      rules: {
        "project[name]": {
          required: true,
          alphabet: true
        },
        "project[description]": {
          required: true,
          alphabet: true
        }
      },
      messages: {
        "project[name]": {
          required: 'Please enter Name',
          alphabet: 'only allow letters'
        },
        "project[description]": {
          required: 'Please enter Description',
          alphabet: 'only allow letters'
        }
      }
    });
   $.validator.addMethod("alphabet", function(value, element) {
    return this.optional(element) || /^[a-zA-Z ]+$/.test(value);
  });
});