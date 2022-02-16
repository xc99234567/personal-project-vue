<template>
    <!-- 左側圖 -->
    <div class="pro_img_wrapper">
        <div class="big_img">
            <img :src="`./img/source/${currentImg}`" />
            <i class="fas fa-chevron-left" @click="prevImg"></i>
            <i class="fas fa-chevron-right" @click="nextImg"></i>
        </div>
        <div class="small_img">
            <img
                v-for="(img, index) in thisProductData.moreImg"
                :key="index"
                :src="`./img/source/${img}`"
                :class="img === currentImg ? 'act' : ''"
                @click="choseImg(index)"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "ProdImgs",
    props: ["thisProductData"],
    data() {
        return {
            currentImg: this.thisProductData.moreImg[0],
        };
    },
    methods: {
        // 下一張圖功能
        nextImg() {
            let imgArr = this.thisProductData.moreImg;
            let imgArrlastIndex = imgArr.length - 1;
            for (let i = 0; i < imgArr.length; i++) {
                if (this.currentImg === imgArr[i] && i != imgArrlastIndex) {
                    this.currentImg = imgArr[i + 1];
                    break;
                } else if (this.currentImg === imgArr[i] && i === imgArrlastIndex) {
                    this.currentImg = imgArr[0];
                    break;
                }
            }
        },
        // 上一張圖功能
        prevImg() {
            let imgArr = this.thisProductData.moreImg;
            let imgArrlastIndex = imgArr.length - 1;
            for (let i = 0; i < imgArr.length; i++) {
                if (this.currentImg === imgArr[i] && i != 0) {
                    this.currentImg = imgArr[i - 1];
                    break;
                } else if (this.currentImg === imgArr[i] && i === 0) {
                    this.currentImg = imgArr[imgArrlastIndex];
                    break;
                }
            }
        },
        // 直接換圖功能
        choseImg(index){
            this.currentImg = this.thisProductData.moreImg[index]
        }
    },
    mounted() {},
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/prodImgs.scss";
</style>
