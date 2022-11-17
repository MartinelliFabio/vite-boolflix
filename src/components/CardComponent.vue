<template>
    <div class="box">
        <div class="box-img">
            <img :src="imgBase + item.backdrop_path" :alt="item.title||item.name">
            <div class="title">{{ item.title||item.name }}</div>
        </div>
        <h5>{{ item.original_title||item.original_name }}</h5>
        <div>
            <span v-for="n in 5" class="fa-star" :class="(n <= star) ? 'fa-solid' : 'fa-regular'"></span>
        </div>
        <div><img :src="flag" :alt="item.original_language" class="flag"></div>
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props: {
            item: Object,
        },
        data() {
            return {
                imgBase: 'https://image.tmdb.org/t/p/w342'
            }
        },
        computed: {
            star() {
                return Math.ceil(this.item.vote_average / 2);
            },
            flag(){
                let flag = this.item.original_language;
                if(flag == 'en'){
                    flag = 'gb';
                }else if(flag == 'ja'){
                    flag= 'jp';
                }else if(flag == 'zh'){
                    flag = 'cn';
                }else if(flag == 'ko') {
                    flag = 'kr';             
                } else if(flag == 'cs') {
                    flag = 'sk';
                }
                const flagUp = flag.toUpperCase();
                const urlFlag = `https://www.countryflagicons.com/FLAT/64/${flagUp}.png`
                return urlFlag;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .box {
        overflow-y: hidden;
        height: 290px;

        .box-img {
            position: relative;
        }
        .title {
            position: absolute;
            top: 0;
            left: 0;
            font-weight: bold;
            font-size: 17px;
            text-shadow: 2px 2px black;
            width: 70%;
        }

        h2 {
            text-transform: uppercase;
        }

        .flag {
            width: 25px;
        }
    }
</style>