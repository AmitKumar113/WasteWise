<template>
    <p>
        E-waste locator
    </p>
</template>

<script>
export default {
    methods: {
        handleLogout(){
            this.$store.dispatch('logout')
        }
    },
    beforeCreate(){
        console.log("locator before created")
    },
    created(){
        console.log("locator created")
    },
    unmounted(){
        console.log("locator unmounted")
    }
}
</script>