<template>
    <main>
        <BannerSwiper></BannerSwiper>
        <ProductSwiper></ProductSwiper>
        <ScrollBg></ScrollBg>
        <Feature></Feature>
        <IndexNews></IndexNews>
    </main>
</template>

<script>
import BannerSwiper from "../components/index/BannerSwiper.vue";
import ProductSwiper from "../components/index/ProductSwiper.vue";
import ScrollBg from "../components/index/ScrollBg.vue";
import Feature from "../components/index/Feature.vue";
import IndexNews from '../components/index/IndexNews.vue';
export default {
    name: "Index",
    components: {
        BannerSwiper,
        ProductSwiper,
        ScrollBg,
        Feature,
        IndexNews
    },
    data() {
        return {
            currentPage: 'index'
        }
    },
    mounted() {
      this.$bus.$emit('currentPage', this.currentPage)
    },
};
</script>

<style lang="scss"></style>
