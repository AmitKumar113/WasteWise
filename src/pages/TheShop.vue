<template>
    <section>
    <add-product-btn v-if="!!isLoggedIn"></add-product-btn>
    <!-- <search-bar @search="handleSearch"></search-bar> -->
    <span>
        <form @submit.prevent="handleSearch" name="searchForm">
            <input type="text" ref="inputElement" name="enteredInput"/>
            <button type="submit">search</button>
        </form>
    </span>
        <div id="item-container">
                <base-dialog 
                    v-if="!!error"
                    :show="!!error"    
                    :message="error" 
                    title="Cant load the content!"
                    @close="handleError" >
                </base-dialog>
                <base-spinner v-if="!error && isLoading"></base-spinner>
                <shop-item v-else v-for="product in filteredItems" :key="product.id" :product="product"></shop-item>
        </div>
    </section>
</template>

<script>
import ShopItem from '../components/Shop/ShopItem.vue'
import AddProductBtn from '../components/Shop/AddProductBtn.vue'
// import SearchBar from '../components/Forms/SearchBar.vue'
import { useStore } from 'vuex'
import { ref, computed} from 'vue'
// import useSearch from '@/hooks/search'

export default {
    components:{
        ShopItem,
        AddProductBtn,
        // SearchBar
    },
    
    setup(){
        const isLoading = ref(false)
        const error = ref(null)
        const inputElement = ref(null)
        const store = useStore()

        function handleError(){
            error.value = null;
        }

        function handleSearch(){
            // setSearchText(inputElement.value.value)
        }

        const isLoggedIn = computed(
            function (){
                return store.getters.getUserId
            }
        )
        
        // const products = computed(
        //     function (){
        //         return store.getters.getAllProducts
        //     }
        // )
        let filteredItems = ref([]);
        // let setSearchText= null;
        
            async function loadProducts(){
                    isLoading.value = true;
                    console.log('onBeforeMount started')
                    try{
                        await store.dispatch('loadProducts');
                        console.log('filteredItems')
                        filteredItems.value = store.getters.getAllProducts
                            // const {filteredItems: filteredItems2, setSearchText: setSearchText2} = useSearch(store.getters.getAllProducts)
                            //  filteredItems = obj.filteredItems.value;
                            //  setSearchText = obj.setSearchText;
                    }catch(err){
                        error.value = err.message || 'error occured! optional'
                    }
                    isLoading.value = false;
                    console.log('onBeforeMount completed')
                }
            loadProducts()

            // )
            
            // const setSearchText = null;
            console.log(filteredItems.value)

            // if(inputElement.value.value===''){
            // } else 

        return {
            isLoading,
            error,
            handleError,
            handleSearch,
            isLoggedIn,
            // products,
            filteredItems,
            inputElement
        }
        
    }


    // data(){
    //     return {
    //         isLoading: false,
    //         error: null
    //     }
    // },  
    // computed:{
    //     products(){
    //         // console.log(this.$store.getters.getAllProducts)
    //         return this.$store.getters.getAllProducts
    //     },
    //     isLoggedIn(){
    //         return this.$store.getters.getUserId
    //     }
    // },
    // methods: {
    //     handleError(){
    //         this.error = null;
    //     },
    //     handleSearch(searchText){
    //         this.$store.dispatch('filterProducts', searchText)
    //     }
    // },  
    // async created(){
    //     this.isLoading = true;
    //     try{
    //         await this.$store.dispatch('loadProducts');
    //     }catch(err){
    //         this.error = err.message || 'error occured! optional'
    //     }
    //     this.isLoading = false;
    // }
}
</script>

<style scoped>
#item-container{
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

</style>