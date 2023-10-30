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
    <div>
        <section>state: {{user.address.state}}</section>
    </div>
    <div>
        <section>Pincode: {{user.address.pincode}}</section>
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