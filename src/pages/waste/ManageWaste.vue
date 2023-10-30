<template>
    <section>
    <!-- <base-spinner v-if="isLoading"></base-spinner> -->
    <header>
        <router-link to="/e-waste/add-waste" class="add-button"> + </router-link>
    </header>
    <div class="main-container">
        <ul class="container">
            <p>Uploaded</p>
            <waste-item v-for="item in initiated" :item="item" :key="item.description"></waste-item>
        </ul>
        <ul class="container">
            <p>Picked</p>
            <waste-item v-for="item in picked" :item="item" :key="item.description"></waste-item>
            
        </ul>
        <ul class="container">
            <p>Recycled</p>
            <waste-item v-for="item in recycled" :item="item" :key="item.description"></waste-item>
        </ul>
    </div>
    </section>
</template>

<script>
import WasteItem from '../../components/Waste/WasteItem.vue'

export default{
    components: {
        WasteItem
    },
    data(){
        return {
            isLoading: false
        }
    },
    computed: {
        user(){
            return this.$store.getters.getUserId;
        },
        initiated(){
            return this.$store.getters.getInitiated;
        },
        picked(){
            return this.$store.getters.getPicked;
        },
        recycled(){
            return this.$store.getters.getRecycled;
        }
    }
}
</script>

<style scoped>
header{
    margin: 1rem;
    padding: 1rem;
}

.add-button{
    width: 3rem;
    height: 3rem;
    border: 1px solid black;
    border-radius: .4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: xx-large;
    text-decoration: none;
}

.main-container{
    border: 1px solid black;
    display: flex;
}

.container{
    flex: 1;
    border: 1px solid red;
}
</style>