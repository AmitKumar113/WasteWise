<template>
    <button>{{ title }}</button>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
            default : 'Submit'      
        },
        link: {
            type: Boolean,
            required: false,
            default: false
        }
    }
}
</script>