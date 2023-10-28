<template>
    <section>
    <add-product-btn v-if="!!isLoggedIn"></add-product-btn>
    <div id="item-container">
                <base-dialog 
                    v-if="!!error"
                    :show="!!error"    
                    :message="error" 
                    title="Cant load the content!"
                    @close="handleError" >
                </base-dialog>
                <base-spinner v-if="!error && isLoading"></base-spinner>
                <shop-item v-else v-for="product in products" :key="product.id" :product="product"></shop-item>
        </div>
        </section>
</template>

<script>
import ShopItem from '../components/Shop/ShopItem.vue'
import AddProductBtn from '../components/Shop/AddProductBtn.vue'

export default {
    data(){
        return {
            isLoading: false,
            error: null
        }
    },  
    components:{
        ShopItem,
        AddProductBtn
    },
    computed:{
        products(){
            // console.log(this.$store.getters.getAllProducts)
            return this.$store.getters.getAllProducts
        },
        isLoggedIn(){
            return this.$store.getters.getUserId
        }
    },
    methods: {
        handleError(){
            this.error = null;
        }
    },  
    async created(){
        this.isLoading = true;
        try{
            await this.$store.dispatch('loadProducts');
        }catch(err){
            this.error = err.message || 'error occured! optional'
        }
        this.isLoading = false;
    }
}
</script>

<style scoped>
#item-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}



</style>