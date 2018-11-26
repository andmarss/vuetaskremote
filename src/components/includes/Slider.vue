<template>
    <div class="carousel-component">
        <span class="carousel-prev" @click="slide('prev')" ref="prev"><i class="fas fa-arrow-left"></i></span>
        <carousel ref="carousel"
                :perPage="3"
                :paginationEnabled="false"
                :perPageCustom="[[1024, 3], [640, 2], [0, 1]]"
                :loop="true">
            <slide>
                <div class="carousel-slide carousel-slide-web">
                    <router-link to="/web" exact>
                        <h3 class="carousel-slide__title">Web</h3>
                        <p>Мы создаём работающие сайты, интернет-магазины и web-сервисы. Вам понравится и захочется еще!</p>
                    </router-link>
                </div>
            </slide>
            <slide>
                <div class="carousel-slide carousel-slide-seo">
                    <router-link to="/seo" exact>
                        <h3 class="carousel-slide__title">SEO</h3>
                        <p>Мы занимаемся результативным продвижением сайтов в Яндекс и Google.</p>
                    </router-link>
                </div>
            </slide>
            <slide>
                <div class="carousel-slide carousel-slide-mobile">
                    <router-link to="/mobile" exact>
                        <h3 class="carousel-slide__title">Mobile</h3>
                        <p>Мы разрабатываем нативные мобильные приложения для стартапов и бизнеса, а также любое программное обеспечение.</p>
                    </router-link>
                </div>
            </slide>
            <slide>
                <div class="carousel-slide carousel-slide-ppc">
                    <router-link to="/ppc" exact>
                        <h3 class="carousel-slide__title">PPC</h3>
                        <p>Размещение объявлений сайта вашей компании в результатах поиска Google и Yandex.</p>
                    </router-link>
                </div>
            </slide>
            <slide>
                <div class="carousel-slide carousel-slide-smm">
                    <router-link to="/smm" exact>
                        <h3 class="carousel-slide__title">SMM</h3>
                        <p>Мы умеем привлекать трафик или внимание к бренду/продукту через социальные платформы.</p>
                    </router-link>
                </div>
            </slide>
            <slide>
                <div class="carousel-slide carousel-slide-dc">
                    <router-link to="/dc" exact>
                        <h3 class="carousel-slide__title">DC</h3>
                        <p>Не просто сайт, а готовое решение для бизнеса за 24 дня с гарантией получения заказов!</p>
                    </router-link>
                </div>
            </slide>
        </carousel>
        <span class="carousel-next" @click="slide('next')" ref="next"><i class="fas fa-arrow-right"></i></span>
    </div>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';

    export default {
        data(){
            return {}
        },
        methods: {
            slide(value){
                const carousel = this.$refs['carousel'];
                const currentPage = carousel.currentPage;
                const pageCount = carousel.pageCount;
                // если нажали на .carousel-prev
                if (value === 'prev') {
                    currentPage !== 0 ? carousel.goToPage(currentPage - 1) : false;
                } else { // нажали на .carousel-next
                    currentPage < pageCount - 1 ? carousel.goToPage(currentPage + 1) : false;
                }
            }
        },
        mounted(){

        },
        computed: {},
        components: {
            carousel: Carousel,
            slide: Slide
        }
    }
</script>

<style scoped lang="scss">

    .carousel-component {
        position: relative;

        .carousel-prev, .carousel-next {
            position: absolute;
            top: 50%;
            cursor: pointer;
            color: #fff;
            z-index: 10;
            margin-top: -8px;
        }

        .carousel-prev {
            left: 10px;
        }

        .carousel-next {
            right: 10px;
        }
    }

    .carousel-slide {
        padding: 50px 0 50px 50px;
        text-align: left;
        background-repeat: no-repeat;
        -webkit-background-size: cover;
        background-size: cover;
        background-position: center;

        &:hover {
            a {
                color: #00BC8C;
            }
        }

        a {
            text-decoration: none;
            transition: color .5s ease;
        }

        h3 {
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 20px;
            color: #fff;
        }

        p {
            font-size: 16px;
            font-weight: 300;
            color: #fff;
        }
        
        &.carousel-slide-web {
            background-image: url("../../assets/web.jpeg");
        }

        &.carousel-slide-seo {
            background-image: url("../../assets/seo.jpg");
        }

        &.carousel-slide-mobile {
            background-image: url("../../assets/mobile.jpg");
        }

        &.carousel-slide-ppc {
            background-image: url("../../assets/ppc.jpg");
        }

        &.carousel-slide-smm {
            background-image: url("../../assets/smm.jpg");
        }

        &.carousel-slide-dc {
            background-image: url("../../assets/dc.jpg");
        }
    }

    @media screen and (max-width: 480px) {
        .carousel-next, .carousel-prev {
            display: none;
        }
    }
</style>