import { createStore } from 'vuex'
import productsModule from './products/index'
import userModule from './user/index'

const store = createStore({
    modules: {
        products: productsModule,
        user: userModule
    }
})

export default store