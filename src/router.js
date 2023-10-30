import { createRouter, createWebHistory } from "vue-router";

import store from './store/index'

import TheShop from './pages/TheShop.vue'
import NotFound from './pages/NotFound.vue'
import UserAuth from './pages/UserAuth.vue'
import TheLocator from './pages/waste/TheLocator.vue'
import TheAbout from './pages/TheAbout.vue'
import UserProfile from './pages/UserProfile.vue'
import ProductDetails from './pages/ProductDetails.vue'
import ManageWaste from './pages/waste/ManageWaste.vue'
import RecyclerSection from './pages/waste/RecyclerSection.vue'

import AddProductForm from './components/Forms/AddProduct.vue'
import AddWaste from './components/Forms/AddWaste.vue'
import MyAccount from './components/Profile/MyAccount.vue'
import CreditPoints from './components/Profile/CreditPoints.vue'
import MyOrders from './components/Profile/MyOrders.vue'
import ScheduleVisit from './components/Waste/ScheduleVisit.vue'
import AreaOverview from './components/Waste/AreaOverview.vue'




const router =  createRouter({
    history: createWebHistory(),
    routes: [
        //auth related routes
        {path: '/', redirect: '/shop'},
        {path: '/auth', component: UserAuth, meta : { reqNoLogin: true } },

        //shop & product related routes
        {path: '/shop', component: TheShop },
        {path: '/add-product', component: AddProductForm },
        {path: '/product/:productId', component: ProductDetails },
        
        //e-waste management related routes
        {path: '/locator', component: TheLocator },
        {path: '/e-waste', component: ManageWaste, meta : { reqLogin: true } },
        {path: '/e-waste/add-waste', component: AddWaste, meta : { reqLogin: true } },
        {path: '/management', component: RecyclerSection, meta : { reqLogin: true }, children: [
            {path: '', redirect: '/management/area-overview' },
            {path: 'area-overview', component: AreaOverview },
            {path: 'schedule-visit', component: ScheduleVisit },
            
     ] },
        

        {path: '/about', component: TheAbout },
        
        //user profile related routes
        {path: '/profile/account', component: UserProfile, meta : { reqLogin: true } ,children : [
            {path:'/profile/account', component: MyAccount},
            {path:'/profile/credits', component: CreditPoints},
            {path:'/profile/orders', component: MyOrders}
        ] },
        {path: '/:notFound(.*)', component: NotFound },
    ]
})
    
    router.beforeEach(function(to, from, next){
        if(to.meta.reqNoLogin && store.getters.getUserId)
            next('/shop')
        else if(to.meta.reqLogin && !store.getters.getUserId)
            next('/auth')
        else next()
    })

export default router