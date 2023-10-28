<template>
    <h3>Signup form</h3>
    <form @submit.prevent="submitForm">
        <div class="form-control">
                <label for="email" class="label">Email</label>
                <input type="text" name="email" id="email" v-model="email"/>
            </div>
            <div class="form-control" >
                <label for="password" class="label">Password</label>
                <input type="password" name="password" rows="4" id="password"  v-model="password"/>
            </div>
            <div class="form-control">
                <h3>Select Your Role: </h3>
                <input type="radio" id="public" value="public" v-model="role"/>
                <label for="public" class="label">Public</label>
                <input type="radio" id="artisan" value="artisan" v-model="role"/>
                <label for="artisan" class="label">Artisan</label>
                <input type="radio" id="recycler" value="recycler" v-model="role"/>
                <label for="recycler" class="label">Recycler</label>
            </div>
            <div>
                <button type="submit">Signup</button>
            </div>
    </form>
</template>

<script>
export default {
    data(){
        return {
            email: '',
            password: null,
            role: null,
        }
    },
     methods: {
        submitForm(){
            // this.$emit('submit')
            this.$store.dispatch('signup', {
                email: this.email,
                password: this.password,
                role: this.role,
                avatar: this.avatar
            })

            // this.$route.redirect('/auth')
        },
    }
}
</script>
