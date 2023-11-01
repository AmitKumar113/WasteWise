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
        // this.$store.dispatch('loadProducts');


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


.toast {
  position: fixed;
  top: 100px;
  right: 10px;
  background: white;
  animation: slideInToast 3s ease;
  padding: 1.2rem 1.6rem;
  border: 1px solid black;
  box-shadow: 0 5px 10px rgba(0, 0, 0, .1);
  z-index: 32;

}

.toast-msg {
  font-weight: bold;
  color : black
}

.toast-error {
  color: red;
  border: 1px solid red;
  padding: 1.6rem;
  background: rgba(241, 79, 14, 0.534) ;

}

.toast-info {
  color: yellow;
  border: 1px solid yellow;
  padding: 1.6rem;
  background: rgba(194, 230, 38, 0.719);
}

.toast-success {
  color: green;
  border: 1px solid green;
  padding: 1.6rem;
  background: rgba(19, 226, 64, 0.534);
}

@keyframes slideInToast {
    0% {
      /* opacity: 0; */
      transform: translateY(-120%);
    }
    20% {
      /* opacity: 1; */
      transform: translateY(0);
    }
    90% {
      /* opacity: 1; */
      transform: translateY(0);
    }
    100% {
      /* opacity: 0; */
      transform: translateY(-120%);
    }
  }
</style>