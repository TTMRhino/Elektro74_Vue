import VueRouter from "vue-router";
import Home from "./pages/Home.vue";

//import { resolve } from "url";
//import About from "./pages/About.vue"
//import Contacts from "./pages/Contacts.vue"
//import Detail from "./pages/Detail.vue"
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

const Shop = resolve => {
    require.ensure(['./pages/Shop.vue'], () => {
        resolve(
            require('./pages/Shop.vue')
        )
    })
}

const Detail = resolve => {
    require.ensure(['./pages/Detail.vue'], () => {
        resolve(
            require('./pages/Detail.vue')
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
        },
        {
            path: '/shop',
            component: Shop
        },
        {
            path: '/detail/:id',
            name: "detail",
            component: Detail
        }
    ],
    mode: 'history'
})