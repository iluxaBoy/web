import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { faJs, faVuejs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { loadFonts } from './plugins/webfontloader'

library.add(fas,faJs,faVuejs)
// library.add(freeBrands)


loadFonts()

createApp(App)
  .component("fa", FontAwesomeIcon)
  .use(vuetify)
  .mount('#app')
