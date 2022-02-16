<template>
    <main>
        <BannerPage :bannerImg="bannerImg"></BannerPage>
        <ApprIntro></ApprIntro>
        <ApprSteps></ApprSteps>
        <ApprStep1></ApprStep1>
        <ApprStep2></ApprStep2>
        <ApprStep3></ApprStep3>
    </main>
</template>

<script>
import BannerPage from "../components/BannerPage.vue";
import ApprIntro from "../components/appraisal/ApprIntro.vue";
import ApprSteps from "../components/appraisal/ApprSteps.vue";
import ApprStep1 from "../components/appraisal/ApprStep1.vue";
import ApprStep2 from "../components/appraisal/ApprStep2.vue";
import ApprStep3 from "../components/appraisal/ApprStep3.vue";
export default {
    name: "Appraisal",
    components: {
        BannerPage,
        ApprIntro,
        ApprSteps,
        ApprStep1,
        ApprStep2,
        ApprStep3,
    },
    data() {
        return {
            currentPage: "appraisal",
            bannerImg: "banner_appraisal.jpg",
        };
    },
    mounted() {
        this.$bus.$emit("currentPage", this.currentPage);
    },
};
</script>

<style></style>
