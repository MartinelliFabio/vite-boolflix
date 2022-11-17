<template>
    <div class="container cbd">
        <h1>{{ title }}</h1>
        <div v-for="(item, index) in items" :key="item.id">
            <CardComponent :item='item'/>
        </div>
    </div>
</template>

<script>
import CardComponent from './CardComponent.vue';
    export default {
        name: 'MainComponent',
        components: {
            CardComponent
        },
        props: {
            items: Array,
            title: String
        }
    }
</script>

<style lang="scss" scoped>
    .cbd {
        border: 1px solid red;
    }
</style>