import Vue from 'vue'

export default {
    state: {
        items: null,
        itemsCount: null
    },
    mutations: {
        setItems(state, payload) {
            state.items = payload.items
            state.itemsCount = payload._meta.totalCount
        }
    },
    actions: {
        asyncGetItems(context) {

            Vue.resource('items')
                .get().then(res => res.json()).then(items => {
                    //console.log(items._meta.totalCount)
                    items.items.map(item => {
                        //убираем из vendor все  "/"
                        return item.vendor = item.vendor.replace(new RegExp("/", 'g'), "")
                    })

                    //помещаем items в store              
                    context.commit('setItems', items)
                })

        }

    },
    getters: {
        items(state) {
            return state.items
        },
        itemsCount(state) {
            return state.itemsCount
        }
    }
}