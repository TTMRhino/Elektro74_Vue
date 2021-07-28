import Vue from 'vue'

export default {
    state: {
        menuGroups: null,
        mainGroup: null

    },
    mutations: {
        setMenuGroup(state, payload) {
            state.menuGroups = payload
        },
        setMainGroup(state, paload) {
            state.mainGroup = paload
        }
    },
    actions: {
        asyncGetMenuGroup(context) {

            //вспомогательная фунсция для меню Асинхронно добавляет подменю (если ее убрать работаь будет но появляется куча ошибок в логах)
            async function getSubMenu(item) {
                return await Vue.resource(`subgroup/get-by-main-id?id=${item.id}`)
                    .get().then(res => res.json()).then(res => item.subGroup = res)
            }


            Vue.resource('maingroup')
                .get().then(res => res.json()).then(menuGroup => {

                    menuGroup.forEach(item => {
                        item.subGroup = getSubMenu(item)

                    });

                    //this.$store.dispatch('asyncGetMainGroup', mainGroup) 
                    context.commit('setMenuGroup', menuGroup)
                })

        },

        asyncGetMainGroupById(context, { id }) {
            Vue.resource(`maingroup/${id}`)
                .get().then(res => res.json()).then(res => {
                    context.commit('', res)
                })
        }

    },
    getters: {
        MenuGroup(state) {
            return state.menuGroups
        },
        MainGroup(state) {
            return state.mainGroup
        }
    }
}