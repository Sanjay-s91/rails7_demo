// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"
window.bootstrap = bootstrap
import jquery from "jquery"
window.jQuery = jquery
window.$ = jquery

require("jquery-validation");
import "./form_validation"
