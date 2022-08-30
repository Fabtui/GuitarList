// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "../controllers"
import "bootstrap"
// that code so it'll be compiled.
import Rails from "@rails/ujs"
// import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import { formClick } from '../components/_form_click'
import { loginAnim } from '../components/_log_in_anim'
import { deleteSweetAlert } from '../components/_delete_sweet_alert'
import { previewImageOnFileSelect } from '../components/_photo_preview'
import { menuDisplay } from '../components/_menu_display'
import { alertClose } from '../components/_alert_close'

Rails.start()
// Turbolinks.start()
ActiveStorage.start()

window.onload = function() {
  formClick()
  loginAnim()
  deleteSweetAlert()
  previewImageOnFileSelect()
  menuDisplay()
  alertClose()
}
