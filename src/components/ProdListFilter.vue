<template>
    <div class="product_category_wrapper" ref="filterWrapper">
        <i class="fas fa-times" @click="filterClose"></i>
        <span>商品分類</span>
        <ul class="main_category">
            <li>郵票</li>
            <li>紙幣</li>
            <li>硬幣</li>
        </ul>
        <div
            class="filter_wrapper"
            v-for="filter in filterData"
            :key="filter.id"
        >
            <div class="filter_title" @click="filterSwitch">
                <span>{{ filter.name }}</span>
                <i class="fas fa-chevron-down"></i>
            </div>
            <form action="#">
                <label v-for="(option, index) in filter.options" :key="index">
                    <input type="checkbox" name="cuntury" />
                    <span>{{ option }}</span>
                </label>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProdListFilter",
    props: ["filterData"],
    methods: {
        filterSwitch(e) {
            e.target.lastChild.classList.toggle("-close");
            e.target.nextSibling.classList.toggle("-form_close");
        },
        filterClose(){
            this.$refs.filterWrapper.classList.remove('-wrapper-on')
        }
    },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/prodListFilter.scss";
</style>
