import Vue from 'vue'
import Vuex from 'vuex'
import items from './items'
import group from './group'
import cart from './cart'

Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        items,
        group,
        cart
    }
})