import VueRouter from "vue-router";
import Home from "./pages/Home.vue"
//import About from "./pages/About.vue"
//import Contacts from "./pages/Contacts.vue"

const About = resolve => {
    require.ensure(['./pages/About.vue'], () => {
        resolve(
            require('./pages/About.vue')
        )
    })
}

const Contacts = resolve => {
    require.ensure(['./pages/Contacts.vue'], () => {
        resolve(
            require('./pages/Contacts.vue')
        )
    })
}
export default new VueRouter({
    routes: [{
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/contacts',
            component: Contacts
        }
    ],
    mode: 'history'
})