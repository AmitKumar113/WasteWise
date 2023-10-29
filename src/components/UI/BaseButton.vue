<template>
    <button v-if="!link" :disabled="disabled"><slot></slot></button>
    <router-link v-else :to="to"><slot></slot></router-link>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: false,
            default : 'Submit'      
        },
        link: {
            type: Boolean,
            required: false,
            default: false
        },
        to: {
            type: String,
            required: false,
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false
        }
    }
}
</script>

<style scoped>
button{
    padding: 8px 8px;
    background-color: #6372d9;
    font-family: 'Courier New', Courier, monospace;
    color: white;
    font-size: medium;
    border-radius: 4px;
    border: none;
    outline: 1px solid white;
    outline-offset: -2px;
    cursor: pointer;
}

button:hover{
    outline-offset: -3px;
}

button:disabled{
    outline-offset: -2px;
    cursor: not-allowed;
    opacity: 0.7;
}
</style>