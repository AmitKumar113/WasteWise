<template>
    <h3>Login form</h3>
    <form @submit.prevent="submitForm">
        <div class="form-control">
                <label for="email" class="label">Email</label>
                <input type="text" name="email" id="email" v-model="email"/>
            </div>
            <div class="form-control" >
                <label for="password" class="label">Password</label>
                <input type="password" name="password" rows="4" id="password"  v-model="password"/>
            </div>
            
            <p class="error-message" v-if="error">{{ error }}</p>
            
            <div>
                <button type="submit">Login</button>
            </div>
    </form>
</template>

<script>

export default {
    data(){
        return {
            email: '',
            password: null,
            error: null,
        }
    },
    methods: {
        async submitForm(){
            // this.$emit('submit', {email: this.email, password: this.password})
            try{
                await this.$store.dispatch('login', {
                    email: this.email,
                    password: this.password
                })
            }catch(err){
                this.error = err.message;
                this.email = '';
                this.password = null;
                return ;
            }

            this.$router.replace('/shop')
        }
    }
}
</script>

<style>
.error-message {
    color: red;
    font-family: 'Courier New', Courier, monospace;
}
</style>
