//import Vue from 'vue'

export default {
    state: {
        cart: {
            items: [],
            totalSum: 0,
            totalQuantity: 0
        }
    },
    actions: {
        addToCart(context, paload) {

            console.log(paload)
            context.commit('setItemToCart', paload)

        }
    },
    mutations: {
        setItemToCart(state, { item }) {
            console.log(item.id)

            const idx = state.cart.items.findIndex(item1 => item1.id === item.id)

            console.log(idx)

            if (idx === -1) {
                state.cart.items.push({
                    id: item.id,
                    item: item.item,
                    price: item.price,
                    quantity: 1
                })
            } else {
                state.cart.items[idx].quantity += 1
            }

            console.log(state.cart)
        }
    },
    getters: {}
}