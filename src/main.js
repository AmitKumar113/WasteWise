import { createApp } from 'vue'
import App from './App.vue'
// import { Cloudinary } from "@cloudinary/url-gen";

import store from './store/index'
import router from './router'
import BaseCard from './components/UI/BaseCard.vue'
import BaseSpinner from './components/UI/BaseSpinner.vue'
import BaseDialog from './components/UI/BaseDialog.vue'
import BaseButton from './components/UI/BaseButton.vue'

const app = createApp(App)
// const cld = new Cloudinary({cloud: {cloudName: 'dxwsqa8dh'}});
// console.log(cld)
app.component('base-card', BaseCard)
app.component('base-spinner', BaseSpinner)
app.component('base-dialog', BaseDialog)
app.component('base-button', BaseButton)

app.use(store)
app.use(router)
// app.use(cld)

router.isReady().then(function(){
    app.mount('#app')
})

