<template>
<header>
    <the-navbar/>
</header>
<section id="app-container">
    <!-- <base-dialog></base-dialog> -->
    <router-view v-slot="slotProps">
        <transition name="home" mode="out-in">
            <component :is="slotProps.Component"></component>
        </transition>
    </router-view>
</section>
    <!-- <the-shop/> -->
</template>

<script>
import TheNavbar from './components/Navbar/TheNavbar.vue'
// import TheShop from './pages/TheShop.vue'

export default {
    components: {
        TheNavbar,
        // TheShop
    },
    created(){
        // this.$store.dispatch('loadProducts');
        this.$store.dispatch('autoLogin');

    }
}
</script>

<style>
body{
    padding: 0;
    margin: 0;
    height: 100vh;
}

#app{
    height: 100%
}

#app-container{
    height: 100%
}

.home-enter-from{
    opacity: 0;
    transform: translateX(-100px)
}

.home-enter-active{
    transition: all 0.3s ease-in ;
}

.home-enter-to{
    opacity: 1;
}

.home-leave-from{
    opacity: 1;
}

.home-leave-active{
    transition: all 0.3s ease-out;
}

.home-leave-to{
    opacity: 0;
    transform: translateX(100px)
}


</style>