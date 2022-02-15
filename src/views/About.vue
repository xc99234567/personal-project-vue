<template>
    <main>
      <BannerPage></BannerPage>
      <AboutUs></AboutUs>
      <AboutForm></AboutForm>
    </main>
</template>

<script>
import BannerPage from '../components/BannerPage.vue'
import AboutUs from '../components/AboutUs.vue'
import AboutForm from '../components/AboutForm.vue'
export default {
  name: 'About',
  components: {
    BannerPage, 
    AboutUs,
    AboutForm,
  }
};
</script>

<style></style>
