<template>
    <main>
        <BannerPage :bannerImg="bannerImg"></BannerPage>
        <AboutUs></AboutUs>
        <AboutForm></AboutForm>
    </main>
</template>

<script>
import BannerPage from "../components/BannerPage.vue";
import AboutUs from "../components/AboutUs.vue";
import AboutForm from "../components/AboutForm.vue";
export default {
    name: "About",
    components: {
        BannerPage,
        AboutUs,
        AboutForm,
    },
    data() {
      return {
        currentPage: 'about',
        bannerImg: 'banner_about.jpg'
      }
    },
    mounted() {
      this.$bus.$emit('currentPage', this.currentPage)
    },
};
</script>

<style></style>
