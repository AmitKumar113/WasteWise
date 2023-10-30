<template>
    <button v-if="!link" :disabled="disabled" class="base-button"><slot></slot></button>
    <router-link v-else :to="to" class="base-button"><slot></slot></router-link>
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
.base-button{
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
    margin: 1rem;
    text-decoration: none;
}

.base-button:hover{
    outline-offset: -3px;
}

.base-button:disabled{
    outline-offset: -2px;
    cursor: not-allowed;
    opacity: 0.7;
}
</style>