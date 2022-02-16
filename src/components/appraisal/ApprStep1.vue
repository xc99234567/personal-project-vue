<template>
    <div class="step1_wrapper">
        <h2>Step.1  事前聯絡</h2>
        <div class="s1_content">
            <div class="s1_left">
                <span
                    >如果有需要鑑定的物品，請先透過E-mail或是填寫表單的方式與我們聯繫，並附上需要鑑定物品的照片，來確定是否能夠收購。</span
                >
                <div class="btn_wrapper">
                    <a href="#" class="btn">
                        <span>E-mail</span>
                        <i class="fas fa-mail-bulk"></i>
                    </a>
                    <router-link :to="{ name: 'About' }" class="btn">
                        <span>表單</span>
                        <i class="fab fa-wpforms"></i>
                    </router-link>
                </div>
            </div>
            <img src="../../assets/imgs/step1.jpg" alt="" data-aos="flip-left" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'ApprStep1'
};
</script>

<style lang="scss" scoped>
@import '../../assets/style/apprStep1.scss';
</style>
