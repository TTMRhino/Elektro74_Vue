import Vue from 'vue'

export default {
    state: {
        mainGroups: null
    },
    mutations: {
        setMainGroup(state, payload) {
            state.mainGroups = payload
        }
    },
    actions: {
        asyncGetMainGroup(context) {

            //вспомогательная фунсция для меню Асинхронно добавляет подменю (если ее убрать работаь будет но появляется куча ошибок в логах)
            async function getSubMenu(item) {
                return await Vue.resource(`subgroup/get-by-main-id?id=${item.id}`)
                    .get().then(res => res.json()).then(res => item.subGroup = res)
            }


            Vue.resource('maingroup')
                .get().then(res => res.json()).then(mainGroup => {

                    mainGroup.forEach(item => {
                        item.subGroup = getSubMenu(item)

                    });

                    //this.$store.dispatch('asyncGetMainGroup', mainGroup) 
                    context.commit('setMainGroup', mainGroup)
                })

        }

    },
    getters: {
        MainGroup(state) {
            return state.mainGroups
        }
    }
}