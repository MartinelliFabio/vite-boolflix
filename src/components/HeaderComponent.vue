<template>
    <div class="header container d-flex align-items-center justify-content-between">
        <div class="d-flex">
            <img src="../../public/img/boolflix.png" alt="BoolFlix Logo" class="me-5">
            <div class="links">
                <span class="active">Home</span>
                <span>Film</span>
                <span>Serie TV</span>
            </div>
        </div>
        <div class="search-bar">
            <form class="d-flex" action="" @submit.prevent="search">
                <label class="visually-hidden" for="searchFilmSerie">Search</label>
                <input type="text" class="form-control" placeholder="Titoli, persone, generi" v-model="text">
                <button type="submit" class="btn btn-primary">Search</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HeaderComponent',
        data() {
            return {
                text: ''
            }
        },
        methods: {
            search() {
                console.log(this.text);
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables' as*;

.header {

    height: 70px;

    img {
        width: 7rem;
    }

    .links {

        span {
            margin-right: 20px;        
        }

        .active {
            font-weight: bold;
        }
    }

    .search-bar {
        input:focus {
            border-color: inherit;
            -webkit-box-shadow: none;
            box-shadow: none;
        }
        .form-control {
            border: 1px solid $white;
            background-color: $search-bar;
            color: $white;
            border-radius: 0;
        }
    }
}


</style>