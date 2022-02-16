<template>
    <div class="scroll_bg"></div>
</template>

<script>
export default {
    name: 'ScrollBg'
};
</script>

<style lang='scss' scoped>
.scroll_bg {
    width: 100%;
    height: 200px;
    margin: 100px 0;
    background-image: url(../../assets/imgs/scroll_bg.jpg);
    background-size: cover;
    background-position: center center;
}

@media (min-width: 768px) {
    .scroll_bg {
        height: 300px;
        background-repeat: no-repeat;
        background-attachment: fixed;
        box-shadow: 10px 10px 50px black inset;
    }
}
</style>
