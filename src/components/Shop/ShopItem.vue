<template>
    <router-link :to="productUrl" class="routerLink">
            <div class="shop-item-container">
                <p>{{ product.title }}</p>
                <p>{{ product.description }}</p>
                <p>{{ product.price }}</p>
            </div>
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
    width: 25%;
    margin: 1rem;
    overflow: hidden;
}


.shop-item-container{
    border: 1px solid grey;
    height: 10rem;
}

p{
    overflow: hidden;
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