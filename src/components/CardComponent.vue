<template>
    <div class="box" :class="{'img-default-size': true, 'img-enlarged-size': imageEnlarged}" @mouseover="enlargeImage" @mouseout="shrinkImage">
        <div class="box-img" @mouseover="hover = true" @mouseout="hover = false">
            <div class="position-absolute overview" v-if="hover">
                <div class="d-flex">
                    {{ item.overview }}
                </div>
            </div>
            <div class="gradient"></div>
            <img :src="item.backdrop_path ? imgBase + item.backdrop_path : 'https://via.placeholder.com/342x192'" :alt="item.title||item.name">
            <div class="title">{{ item.title||item.name }}</div>
        </div>
        <h5>{{ item.original_title||item.original_name }}</h5>
        <div>
            <span v-for="n in 5" class="fa-star" :class="(n <= star) ? 'fa-solid' : 'fa-regular'"></span>
        </div>
        <div>
            <img :src="flag" :alt="item.original_language" class="flag">
        </div>
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
                imgBase: 'https://image.tmdb.org/t/p/w342',
                imageEnlarged: false,
                hover: false,
            }
        },
        methods: {
            enlargeImage() {
                console.log("enlarged");
                this.imageEnlarged = true;
            },
            shrinkImage() {
                this.imageEnlarged = false;
            },
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
@use '../assets/style/partials/variables' as*;

    .gradient {
        background-image: linear-gradient(to bottom, rgba(255,0,0,0), rgba(0, 0, 0, 1));
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        opacity: 80%;
    }

    .box {
        overflow-y: hidden;
        height: 290px;

        .box-img {
            position: relative;
            cursor: pointer;
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

    .img-default-size {
        transition: all 0.2s;
    }

    .img-enlarged-size {
        transform: scale(1.1);
        transition: all 0.2s;
    }

    .overview {
        overflow-y: hidden;
    }
</style>