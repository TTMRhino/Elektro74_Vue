import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from "./routes"
import * as VueGoogleMaps from 'vue2-google-maps'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource);
Vue.http.options.root = 'http://yii2-admin.local/api/'
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDAq7MrCR1A2qIShmjbtLHSKjcEIEBEEwM',
        libraries: 'places',
    }
})

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
}).$mount('#app')