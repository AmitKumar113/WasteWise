import { createStore } from 'vuex'
import productsModule from './products/index'
import userModule from './user/index'
import wasteModule from './waste/index'
import recyclerModule from './recycler/index'

const store = createStore({
    modules: {
        products: productsModule,
        user: userModule,
        waste: wasteModule,
        recycler: recyclerModule
    }
})

export default store