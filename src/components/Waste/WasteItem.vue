<template>
    <div class="container">
        <div class="image-container"></div>
        <div class="description">

            {{ item.description }}
        </div>
    </div>
</template>

<script>
export default{
    props: ['item']
}
</script>

<style scoped>
.container{
    border: 1px solid black;
    display: flex;
    height: 4rem;
    padding: 4px;
}

.image-container{
    border: 1px solid black;
    width: 3rem;
}

.description{
    border: 1px solid black;
    flex: 1
}
</style>