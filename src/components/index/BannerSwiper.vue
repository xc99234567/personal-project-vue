<template>
    <div class="swiper mySwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="../../assets/imgs/carousel1.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="../../assets/imgs/carousel2.jpg"/>
            </div>
            <div class="swiper-slide">
                <img src="../../assets/imgs/banner_news2.jpg"/>
            </div>
        </div>
        <div class="swiper-button-next swiper-button"></div>
        <div class="swiper-button-prev swiper-button"></div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
import  Swiper  from "swiper/swiper-bundle";

export default {
    name: "BannerSwiper",
    mounted() {
        // 輪播套件
        new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/mySwiper.scss";
</style>
