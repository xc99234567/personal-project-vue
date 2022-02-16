<template>
    <ul class="pages_wrapper" data-aos="fade-up" data-aos-duration="1000">
        <li>
            <a href="#"><i class="fas fa-chevron-left"></i></a>
        </li>
        <li><a href="#" class="current_page">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li>
            <a href="#"><i class="fas fa-chevron-right"></i></a>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'PageSelector'
};
</script>

<style lang="scss" scoped>
@import '../assets/style/pageSelector.scss';
</style>
