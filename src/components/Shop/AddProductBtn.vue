<template>
    <router-link to="/add-product" class="add-product-btn">
        <p>+</p>
    </router-link>
</template>

<style scoped>
.add-product-btn{
    background-color: blue;
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: fixed;
    right: 2rem;
    bottom: 2rem;
    text-decoration: none;
}

p{
    font-size: xx-large;
    color: white;
}
</style>