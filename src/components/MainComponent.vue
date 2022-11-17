<template>
    <div class="container pt-5">
        <h1 class="mb-4 mt-5">{{ title }}</h1>

        <div class="row">
            <div class="slider col-lg-3 col-md-4 col-sm-6 col-xs-12 p-0 me-3" v-for="(item, index) in items" :key="item.id">
                <CardComponent :item='item'/>
            </div>
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
    
    .row {
        flex-wrap: nowrap;
        overflow-x: auto; 
        margin-bottom: 50px;

        div.slider:last-child {
            margin-right: 0 !important;
        }

    }

    .row::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }
  
    .row::-webkit-scrollbar-track {
        border-radius: 10px;
        background: rgba(206, 16, 0, 0.1);
    }
    .row::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background: rgba(206, 16, 0, 0.6);
    }
    .row::-webkit-scrollbar-thumb:hover{
        background: rgba(206, 16, 0, 0.7);
    }
    .row::-webkit-scrollbar-thumb:active{
        background: rgba(206, 16, 0, 0.9);
    }

</style>