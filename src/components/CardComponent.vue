<template>
    <div class="box">
        <h2>{{ item.original_title||item.original_name }}</h2>
        <div>{{ item.title||item.name }}</div>
        <div>{{ item.vote_average }}</div>
        <div>{{ item.original_language }}</div>
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props: {
            item: Object
        }
    }
</script>

<style lang="scss" scoped>
    .box {

        h2 {
            text-transform: uppercase;
        }
    }
</style>