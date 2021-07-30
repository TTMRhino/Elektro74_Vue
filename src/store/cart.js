//import Vue from 'vue'
function countCart(state) {
    state.cart.totalQuantity = 0
    state.cart.totalSum = 0

    state.cart.items.map(function(item) {
        state.cart.totalQuantity += item.quantity
        state.cart.totalSum += item.price * item.quantity
    })

}
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
                    img: '/img/products/l' + item.vendor + '.jpg',
                    item: item.item,
                    price: item.price,
                    quantity: 1
                })

            } else {
                state.cart.items[idx].quantity += 1
            }


            countCart(state)

            console.log(state.cart)
        }
    },
    getters: {
        totalQuantity(state) {
            return state.cart.totalQuantity
        },
        totalSum(state) {
            return state.cart.totalSum
        },
        getCartItems(state) {
            return state.cart.items
        }
    }
}