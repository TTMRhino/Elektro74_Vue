import Vue from 'vue'

export default {
    state: {
        items: null,
        top: [],
        paginations: {}

    },
    mutations: {
        setItems(state, payload) {
            state.items = payload.items
            state.paginations = payload._meta //пагинация
            state.paginations.links = payload._links
        },

        setTop(state, payload) {
            console.log(payload)
            state.top = payload
        },

        setCurrentPage(state, payload) {
            state.paginations.currentPage = payload
        }

    },
    actions: {
        asyncGetItems(context, payload = 1) {

            Vue.resource(`items?page=${payload}`)
                .get().then(res => res.json()).then(items => {
                    items.items.map(item => {
                        //убираем из vendor все  "/"
                        return item.vendor = item.vendor.replace(new RegExp("/", 'g'), "")
                    })

                    //помещаем items в store              
                    context.commit('setItems', items)
                })

        },

        asyncGetTop(context) {

            Vue.resource('items/gettop')
                .get().then(res => res.json()).then(items => {

                    items.items.map(item => {
                        //убираем из vendor все  "/"
                        return item.vendor = item.vendor.replace(new RegExp("/", 'g'), "")
                    })

                    context.commit('setTop', items)
                })
        }

    },
    getters: {
        items(state) {
            return state.items
        },
        paginations(state) {
            return state.paginations
        },
        top(state) {
            return state.top
        }
    }
}