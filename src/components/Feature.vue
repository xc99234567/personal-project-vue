<template>
    <div class="feature_wrapper">
        <!-- 特色內容 -->
        <div class="fea_content_wrapper">
            <h2 class="animate__animated animate__tada">我們的特色</h2>
            <div class="fea_item">
                <img
                    src="../assets/imgs/feature3.jpg"
                    alt=""
                    class="fea_img fea_img1"
                    data-aos="flip-left"
                />
                <h3 data-aos="zoom-in">
                    大量的收藏
                    <p>
                        <br />
                        世界各國、古今東西的收藏品一應具全。
                        <br />
                        <br />
                        並且皆在最萬全的環境下保存
                        <br />
                        <br />
                        排除一切可能損害收藏的因素
                        <br />
                        <br />
                        藉此讓所有收藏皆能保持在最完美的狀態。
                    </p>
                </h3>
            </div>
            <div class="fea_item fea_item2">
                <h3 data-aos="zoom-in">
                    收藏家集結的專門店
                    <p>
                        <br />
                        店內集結了各地的收藏家，不僅店內的夥伴，
                        <br />
                        <br />
                        時常來店的顧客們對收藏都有很深入的見解，
                        <br />
                        <br />
                        讓收藏者之間一起分享收藏的喜悅。
                    </p>
                </h3>
                <img
                    src="../assets/imgs/feature2.jpg"
                    alt=""
                    class="fea_img fea_img2"
                    data-aos="flip-right"
                />
            </div>
        </div>
        <!-- 文字介紹被景色 -->
        <div class="fea_text_bg bg_1" data-aos="zoom-out-top"></div>
        <div class="fea_text_bg bg_2" data-aos="zoom-out-top"></div>
    </div>
</template>

<script>
export default {
    name: 'Feature'
};
</script>

<style lang="scss" scoped>
@import '../assets/style/feature.scss';
</style>
