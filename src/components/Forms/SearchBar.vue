<template>
    <span>
        <form @submit.prevent>
            <input type="text" ref="searchText"/>
            <button type="submit" @click="search">search</button>
        </form>
    </span>
</template>

<script>
export default{
    methods: {
        search(){
            this.$emit('search', this.$refs.searchText.value)
        }
    }
}
</script>