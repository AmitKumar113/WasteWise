<template>
    <div>
        product details
        <base-spinner v-if="isLoading"></base-spinner>
        <transition>
            <base-card v-if="!isLoading">
                <p>{{ product.title }}</p>
                <p>{{ product.type }}</p>
            </base-card>
        </transition>
    </div>
</template>

<script>

export default {
    data(){
        return {
            product: null,
            isLoading: true
    }
    },
    async created(){
        console.log(this.$route.params.productId)
        this.isLoading = true;
        const res = await fetch(`https://wastewise-007-default-rtdb.firebaseio.com/products/${this.$route.params.productId}.json`,{
            method: 'GET'
        })

        const data = await res.json();
        this.product = data;
        this.isLoading = false;
    }
}
</script>

<style scoped>
.v-enter-from{
opacity: 0;
transform: translateY(-50px)
}

.v-enter-active{
transition: all 0.3s ease-in;
}

.v-enter-to{
opacity: 1;
transform: translateY(0px)
}
</style>