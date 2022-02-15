<template>
    <div class="swiper mySwiper-pro">
        <h2 class="animate__animated animate__tada">主要商品</h2>
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <router-link :to="{ name: 'ProductList' }" class="product_link">
                    <img src="../assets/imgs/main_product1.jpg" />
                    <div class="black-bg">
                        <span class="pro-name"> 郵票 </span>
                    </div>
                </router-link>
            </div>
            <div class="swiper-slide">
                <router-link :to="{ name: 'ProductList' }" class="product_link">
                    <img src="../assets/imgs/main_product2.jpg" />
                    <div class="black-bg">
                        <span class="pro-name"> 硬幣 </span>
                    </div>
                </router-link>
            </div>
            <div class="swiper-slide">
                <router-link :to="{ name: 'ProductList' }" class="product_link">
                    <img src="../assets/imgs/main_product3.jpg" />
                    <div class="black-bg">
                        <span class="pro-name"> 紙幣 </span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from "swiper/swiper-bundle";
export default {
    name: "ProductSwiper",
    mounted() {
        // 輪播套件
        new Swiper(".mySwiper-pro", {
            effect: "cards",
            grabCursor: true,
            cardsEffect: {
                slideShadows: false,
            },
        });
    },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/mySwiper.scss";
</style>
