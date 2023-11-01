<template>
    <div class="container">
        <div class="image-container"></div>
        <div class="description">

            {{ item.description }}
        </div>
        <div class="btn" @click="handleMoveup" v-if="role==='recycler'">
            next
        </div>
    </div>
</template>

<script>
export default{
    props: ['item'],
    methods: {
        handleMoveup(){
            // console.log(this.item.status)
            // console.log(this.item)
            this.$store.dispatch('wasteMoveup', this.item)
        }
    },
    computed: {
        role(){
            return this.$store.getters.getUserRole
        }
    }

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

.btn{
    border: 1px solid grey;
    cursor: pointer;
}
</style>