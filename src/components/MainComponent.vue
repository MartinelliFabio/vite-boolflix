<template>
    <div class="container cbd">
        <CardComponent/>
    </div>
</template>

<script>
import CardComponent from './CardComponent.vue';
    export default {
        name: 'MainComponent',
        components: {
            CardComponent
        }
    }
</script>

<style lang="scss" scoped>
    .cbd {
        border: 1px solid red;
    }
</style>