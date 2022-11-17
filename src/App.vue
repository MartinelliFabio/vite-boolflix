<template>
  <header>
    <HeaderComponent/>
  </header>
  <main>
    <MainComponent title="Films" :items='store.movie'/>
    <MainComponent title="TV Series" :items='store.tv'/>
  </main>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import axios from 'axios';
import { store } from'./store';


export default {
    components: {
      HeaderComponent,
      MainComponent
    },
    data() {
      return {
        store
      }
    },
    watch: {
      'store.params.query'(newVal, oldVal) {
        if(newVal !== oldVal) {
          this.getMovie();
          this.getSeries();
        }
      }
    },
    methods: {
      getMovie() {
        const apiUrl = store.apiUrl + store.endPoint.movie;
        const params = store.params;
        axios.get(apiUrl, {params}).then((res) => {
          store.movie = res.data.results;
        })
      },
      getSeries() {
        const apiUrl = store.apiUrl + store.endPoint.tv;
        const params = store.params;
        axios.get(apiUrl, {params}).then((res) => {
          store.tv = res.data.results;
        })
      }
    },
    created() {

    }
}
</script>

<style lang="scss" scoped>

</style>