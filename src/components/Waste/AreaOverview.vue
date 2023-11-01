<template>
    <section class="main-container">
        <base-card>
            <div>
                <input type="number" ref="enteredPincode"/>
                <select ref="selectedStatus">
                    <option>Initiated</option>
                    <option>Picked</option>
                    <option>Recycled</option>
                </select>
                <button @click="handleSearch">Search</button>
            </div>
            <div>
                <waste-item v-for="(item, index) in items" :key="index" :item="item"></waste-item>
            </div>
        </base-card>
    </section>
</template>

<script>
import WasteItem from './WasteItem.vue';
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
    components : {
        WasteItem
    },
    setup(){
        const enteredPincode = ref(null)
        const selectedStatus = ref('Initiated')

        const store = useStore()

        async function handleSearch(){
            // console.log(selectedStatus.value.value)
            store.dispatch('fetchPinWiseWasteList', { pincode: enteredPincode.value.value })
        }

        
        const items = computed(function(){
            if(selectedStatus.value.value==='Initiated'){
                return store.getters.getRecyclerInitiated
            } else if(selectedStatus.value.value==='Picked'){
                return store.getters.getRecyclerPicked
            } 
            return store.getters.getRecyclerRecycled

            // return ['qwerty','12345','asdfg','cvbnm']
        })

        return {
            handleSearch,
            enteredPincode,
            selectedStatus,
            items
        }
    }
}
</script>


<style scoped>
.main-container{
    border: 1px solid black;
}
</style>