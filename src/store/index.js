import Vue from 'vue'
import Vuex from 'vuex'
import items from './items'
import group from './group'

Vue.use(Vuex)


export default new Vuex.Store({
    modules: {
        items,
        group,
    }
})