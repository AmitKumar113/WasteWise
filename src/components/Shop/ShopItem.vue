<template>
    <router-link :to="productUrl" class="routerLink">
        <!-- <transition> -->
            <base-card>
                <p>{{ product.title }}</p>
                <p>{{ product.description }}</p>
                <p>{{ product.price }}</p>
            </base-card>
        <!-- </transition> -->
        </router-link>
</template>

<script>
export default {
    props: ['product'],
    computed: {
        productUrl(){
            // console.log(this.product)
            return '/product/' + this.product.id
        }
    }
}
</script>

<style scoped>
.routerLink{
    text-decoration: none;
    color: black;
}

/* .v-enter-from{
opacity: 0;
transform: translateY(-50px)
}

.v-enter-active{
transition: all 0.3s ease-in;
}

.v-enter-to{
opacity: 1;
transform: translateY(0px)
} */
</style>