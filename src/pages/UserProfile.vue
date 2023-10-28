<template>
   <div class="container">
        <div class="navigation">
            <router-link to="/profile/account" class="nav-btn">My Account</router-link>
            <router-link to="/profile/credits" class="nav-btn">Credits</router-link>
            <router-link to="/profile/orders" class="nav-btn">Orders</router-link>
            <button class="nav-btn" @click="handleLogout">Logout</button>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
   </div>
</template>

<script>
export default {
    methods: {
        handleLogout(){
            this.$store.dispatch('logout')
        }
    },
    created(){
        console.log("profile created")
    },
    unmounted(){
        console.log("profile unmounted")
    }
}
</script>

<style scoped>
.container{
    border: 1px solid black;
    display: flex;
    height: 100%;
}

.navigation{
    border: 1px solid red;
    width: 20vw;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.nav-btn{
    border: 1px solid grey;
    background-color: grey;
    text-decoration: none;
    font-family: 'Courier New', Courier, monospace;
    font-size: larger;
    margin: 2px 0;
    color: white;
}
.content{
    border: 1px solid green;
    width: 100%
}


</style>