<template>
    <div class="banner">
        <img src="../../public/img/source/banner_about.jpg" />
    </div>
</template>

<script>
export default {
    name: "BannerPage",
};
</script>

<style lang="scss" scoped>
/* banner */
.banner img {
    width: 100%;
    height: 480px;
    object-fit: cover;
}

@media (max-width: 767.98px) {
    .banner img {
        height: 360px;
    }
}
</style>
