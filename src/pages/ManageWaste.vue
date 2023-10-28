<template>
    <header>
        <router-link to="/e-waste/add-waste" class="add-button"> + </router-link>
    </header>
</template>

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
</style>