<template>
    <!-- 右側介紹 -->
    <div class="pro_text_wrapper">
        <div class="pro_name">
            <span>{{thisProductData.name}}</span>
            <span>${{thisProductData.price}}</span>
        </div>
        <div class="cart_in_btn">
            <span>加入購物車</span>
            <i class="fas fa-cart-plus"></i>
        </div>
        <div class="pro_intro">
            <span>商品介紹</span>
            <div class="intro_item">
                <span>產品類別</span>
                <span>台灣郵票</span>
            </div>
            <div class="intro_item">
                <span>商品狀態</span>
                <span>全新</span>
            </div>
            <div class="intro_item">
                <span>生產年份</span>
                <span>民國95年</span>
            </div>
            <div class="intro_item">
                <span class="intro_text">商品介紹</span>
                <p>
                    大版張特別版490號，故宮宋代書畫一套共4張全版張，原膠尚在，背面無任何汙損為白色，且併任何折痕。
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProdIntro',
    props: ['thisProductData']
};
</script>

<style lang="scss" scoped>
@import '../../assets/style/prodIntro.scss';
</style>