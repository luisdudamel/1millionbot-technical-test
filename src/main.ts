import "./styles/main.scss"

import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import { Quasar } from "quasar"
import "@quasar/extras/material-icons/material-icons.css"
import "quasar/dist/quasar.css"

const app = createApp(App)

app.use(Quasar, {
  plugins: {}
})
app.use(router)
app.mount("#app")
