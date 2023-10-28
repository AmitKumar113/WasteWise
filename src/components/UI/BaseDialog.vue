<template>
    <!-- <teleport to="body"></teleport> -->
    <div class="backdrop" v-if="show" @click="tryClose"></div>
    <transition>
        <dialog open v-if="show">
            <header>
                <p>{{ title }}</p>
            </header>
            <div>
                <p>{{ message }}</p>
            </div>
            <base-button title="okay"  @click="tryClose"></base-button>
        </dialog>
    </transition>
</template>

<script>
export default {
    props: {
        title : {
            type: String,
            required: true,
            default: 'error occured! default title'
        },
        message  :{
            type: String,
            required: true,
            default: 'default message! please try again something went wrong!'
        },
        show: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    methods: {
        tryClose(){
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
.backdrop{
    top: 0;
    left: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.6);
    border: 2px solid black;
}

dialog{
    width: 60vw;
    z-index: 100;
}

.v-enter-from, .v-leave-to{
opacity: 0;
transform: translateY(-50px)
}

.v-enter-active, .v-leave-active{
transition: all 0.3s ease-in;
}

.v-enter-to, .v-leave-from{
    opacity: 1;
    transform: translateY(0px)
}

</style>