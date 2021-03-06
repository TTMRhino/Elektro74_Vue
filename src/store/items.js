import Vue from 'vue'

export default {
    state: {
        items: null,
        top: [],
        paginations: {},
        sort: 'item',
        method: '',
        loading: 'false'

    },
    mutations: {
        setItems(state, payload) {
            state.items = payload.items
            state.paginations = payload._meta //пагинация
            state.paginations.links = payload._links
        },

        setTop(state, payload) {

            state.top = payload
        },

        //возможно это уже не нужно!
        setCurrentPage(state, payload) {
            state.paginations.currentPage = payload
        },

        setSort(state, paload) {
            state.sort = paload
        },
        setMethod(state, paload) {
            state.method = paload
        },

        setLoading(state, paload) {
            state.loading = paload
        }

    },
    actions: {
        async asyncGetItems(context, payload) {
            let str = `items`

            context.commit('setLoading', true)

            if (typeof payload == 'undefined') {
                payload = {
                    page: 1
                }
            }

            if (this.state.items.method === '') {
                str += '?'
            } else { str += this.state.items.method + '&' }

            if (typeof payload.page == 'undefined') {
                payload.page = 1
                str += `page=${payload.page}`
            } else { str += `page=${payload.page}` }

            str += `&sort=${this.state.items.sort}`

            console.log(str)
            try {
                Vue.resource(str)
                    .get().then(res => res.json()).then(items => {
                        items.items.map(item => {
                            //убираем из vendor все  "/"
                            return item.vendor = item.vendor.replace(new RegExp("/", 'g'), "")
                        })

                        //помещаем items в store              
                        context.commit('setItems', items)
                        context.commit('setLoading', false)
                    })
            } catch (error) {
                context.commit('setLoading', false)
                throw (error)
            }



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
        },
        sort(state) {
            return state.sort
        },
        method(state) {
            return state.method
        },
        loading(state) {
            return state.loading
        }
    }
}