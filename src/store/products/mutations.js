export default {
    addProduct(state, payload){
        state.products.push(payload)
    },
    loadProducts(state, payload){
        state.products = payload
    }
}