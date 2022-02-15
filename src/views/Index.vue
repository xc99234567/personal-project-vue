<template>
    <div>
        <BannerSwiper></BannerSwiper>
        <ProductSwiper></ProductSwiper>
        <ScrollBg></ScrollBg>
        <Feature></Feature>
        <IndexNews></IndexNews>
    </div>
</template>

<script>
import BannerSwiper from "../components/BannerSwiper.vue";
import ProductSwiper from "../components/ProductSwiper.vue";
import ScrollBg from "../components/ScrollBg.vue";
import Feature from "../components/Feature.vue";
import IndexNews from '../components/IndexNews.vue';
export default {
    name: "Index",
    components: {
        BannerSwiper,
        ProductSwiper,
        ScrollBg,
        Feature,
        IndexNews
    },
};
</script>

<style lang="scss"></style>
