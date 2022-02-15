<template>
    <div id="app">
        <NavHeader/>
        <router-view/>
        <CommonFooter/>
    </div>
</template>

<script>

import Aos from 'aos';
import NavHeader from './components/NavHeader.vue';
import CommonFooter from './components/CommonFooter.vue'
export default {
    name: 'App',
    components:{NavHeader, CommonFooter},
    mounted() {
        Aos.init();
    },
}
</script>

<style lang="scss">
@import '../node_modules/aos/dist/aos.css';
* {
    font-family: "Microsoft JhengHei", sans-serif;
    font-weight: bold;
}

body {
    background-color: #eeece1;
    box-sizing: border-box;
}
</style>
