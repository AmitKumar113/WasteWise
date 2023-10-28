<template>
    <div>
        <section>Username : {{user.email}}</section>
    </div>
    <div>
        <section>Email: {{user.email}}</section>
    </div>
    <div>
        <section>Role: {{user.role}}</section>
    </div>
</template>

<script>
export default {
    computed: {
        user(){
            return this.$store.getters.getUser
        }
    }
}
</script>