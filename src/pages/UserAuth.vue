<template>
    <div>
    <base-card>
        <signup-form v-if="mode==='signup'"></signup-form>
        <login-form v-else></login-form>
    </base-card>
    <base-button @click="toggleMode">{{mode==='login'?'Signup':'Login'}} Instead</base-button>
    </div>
</template>
<script>
import SignupForm from '../components/Forms/SignupForm.vue'
import LoginForm from '../components/Forms/LoginForm.vue'

export default {
    data(){
        return {
            mode: 'login'
        }
    },
    components: {
        SignupForm,
        LoginForm
    },  
    methods: {
        toggleMode(){
            if(this.mode==='login')
                this.mode = 'signup'
            else this.mode = 'login'
        },
        login(object){
            console.log('login called' + object.email + object.password)
        },
        signup(){
            console.log('signup called')
        },
    }
}
</script>