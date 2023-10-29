<template>
    <h3>Signup form</h3>
    <form @submit.prevent="submitForm">
            <div class="form-control">
                <label for="name" class="label">Full Name</label>
                <input type="text" name="name" id="name" v-model="name"/>
            </div>
            <div class="form-control">
                <label for="email" class="label">Email</label>
                <input type="email" name="email" id="email" v-model="email"/>
            </div>
            <div class="form-control" >
                <label for="password" class="label">Password</label>
                <input type="password" name="password" rows="4" id="password"  v-model="password"/>
            </div>
            
            <!-- address -->
            <div class="form-control">
                <label for="state" class="label">State</label>
                <input type="text" name="state" id="state" v-model="state"/>
            </div>
            <div class="form-control">
                <label for="pincode" class="label">Pincode</label>
                <input type="number" name="pincode" id="pincode" v-model="pincode"/>
            </div>
            
            <!-- role -->
            <div class="form-control">
                <h3>Select Your Role: </h3>
                <input type="radio" id="public" value="public" v-model="role"/>
                <label for="public" class="label">Public</label>
                <input type="radio" id="artisan" value="artisan" v-model="role"/>
                <label for="artisan" class="label">Artisan</label>
                <input type="radio" id="recycler" value="recycler" v-model="role"/>
                <label for="recycler" class="label">Recycler</label>
            </div>
            <p v-if="!isValidated" class="error-msg">Fillout the form correctly!</p>
            <div>
                <base-button type="submit" :disabled="isProcessing">Signup</base-button>
            </div>
    </form>
</template>

<script>
import { displayActionMessage } from '../Utils/popup.js'

export default {
    data(){
        return {
            name: '',
            email: '',
            password: null,
            role: null,
            state:'',
            pincode: '',
            isProcessing: false,
            isValidated: true
        }
    },
    methods: {
         validate(){
            console.log('validte')
             if(this.name==='' || this.email==='' || this.password.length < 8 || this.role === null || this.pincode === '')
                 this.isValidated = false;
            else  this.isValidated = true;    
         },
        async submitForm(){
            this.validate()
            if(!this.isValidated) return;

            try{
                this.isProcessing = true;
                await this.$store.dispatch('signup', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    role: this.role,
                    address: {
                        state: this.state,
                        pincode: this.pincode
                    }
                })

                displayActionMessage("Signup Successful!", 'success')
            }catch(err){
                console.log(err)
                displayActionMessage(err.message || "Something went wrong!", 'error')
            }finally{
                this.isProcessing = false;
            }

            // this.$router.push('/shop')
            this.$router.replace('/shop')
            // console.log(this.$route)
        },
    }
}
</script>

<style scoped>
.error-msg{
    color: red;

}
</style>