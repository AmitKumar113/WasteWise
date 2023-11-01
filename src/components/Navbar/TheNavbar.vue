<template>
<header>
    <div id="navbar-container">
        <div id="logo">WasteWise</div>
        <div id="btn-container">
            <router-link to="/shop" class="btn">Shop</router-link>
            <router-link to="/locator" class="btn">Locator</router-link>
            <router-link to="/e-waste" class="btn" v-if="!isLoggedin || role!=='recycler'">E-waste</router-link>
            <router-link to="/management" class="btn" v-if="isLoggedin && role==='recycler'">Manage</router-link>
            <router-link to="/about" class="btn">About</router-link>
        </div>
        <div>
            <router-link to="/auth" class="btn" v-if="!isLoggedin">Login</router-link>
            <router-link class="btn" to="/profile/account" v-else>Hello! {{ UserName }}</router-link>
        </div>
    </div>
</header>
</template>

<script>

export default {
    computed: {
        isLoggedin(){
            return this.$store.getters.getUserId
        },
        UserName(){
            // console.log(this.$store)
            return this.$store.getters.getUserEmail
        },
        role(){
            return this.$store.getters.getUser.role
        }
    }
}
</script>

<style scoped>
header{
    width: 100%;
    height: 5rem;
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
}

#navbar-container {
    width: 100%;
    display: flex;
    /* border: 1px solid black; */
}

#logo{
    width: 20%;
    color: white;
    font-size: xx-large;
    padding: 0.5rem;
}
.btn{
    margin: 0.5rem;
    padding: 0.5rem;
    /* border: 1px solid black; */
    font-size: larger;
    font-family: 'Courier New', Courier, monospace;
    color: white;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#btn-container{
    display: flex;
    flex: 1;
}

.router-link-active{
    border-bottom: 1px solid white;
}
</style>