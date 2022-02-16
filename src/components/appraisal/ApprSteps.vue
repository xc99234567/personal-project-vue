<template>
    <div class="steps_wrapper">
        <div class="steps_content">
            <h2>鑑定收購流程</h2>
            <div class="steps">
                <div class="step_item" v-scroll-to="'.step1_wrapper'" data-aos="zoom-in-down">
                    <img src="../../assets/imgs/step1.jpg"/>
                    <span>事前聯絡</span>
                </div>
                
                <i class="fas fa-long-arrow-alt-right" data-aos="zoom-in-down"></i>

                <div class="step_item" v-scroll-to="'.step2_wrapper'" data-aos="zoom-in-down">
                    <img src="../../assets/imgs/step2.jpg"/>
                    <span>正式鑑定</span>
                </div>

                <i class="fas fa-long-arrow-alt-right col_arrow" data-aos="zoom-in-down"></i>

                <div class="step_item" v-scroll-to="'.step34_wrapper'" data-aos="zoom-in-down">
                    <img src="../../assets/imgs/step3.jpg"/>
                    <span>價格確認</span>
                </div>

                <i class="fas fa-long-arrow-alt-right" data-aos="zoom-in-down"></i>

                <div class="step_item" v-scroll-to="'.step34_wrapper'" data-aos="zoom-in-down">
                    <img src="../../assets/imgs/step4.jpg"/>
                    <span>成交付款</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ApprSteps'
};
</script>

<style lang="scss" scoped>
@import '../../assets/style/apprSteps.scss';
</style>