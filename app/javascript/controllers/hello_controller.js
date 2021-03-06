import { Controller } from "@hotwired/stimulus"

// export default class extends Controller {
//   connect() {
//     this.element.textContent = "Hello World!"
//   }
// }


// import { Controller } from "stimulus"

export default class extends Controller {
  greet() {
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
  }
}