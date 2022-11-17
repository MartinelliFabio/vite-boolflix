import { reactive } from 'vue';

export const store = reactive ({
    apiUrl: 'https://api.themoviedb.org/3',
    endPoint: {
        movie: '/search/movie',
        tv: '/search/tv'
    },
    params: {
        api_key: '0e9a9af4c1ab00bf4ff9500f3763be9f',
        query: '',
        language: 'it-IT'
    },
    movie: []
});
