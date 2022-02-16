<template>
    <div class="product_content_wrapper">
        <div class="sort_mode" @click="sortOpen">
            <span>排序方式</span>
            <i class="fas fa-chevron-up" ref="fasArrow"></i>
            <div class="sort_down" ref="sort_down">
                <button>最新</button>
                <button>價格:由高到低</button>
                <button>價格:由低到高</button>
            </div>
        </div>
        <button class="filter-btn" @click="smallFilterOpen">
            <span>篩選</span>
            <i class="fas fa-filter"></i>
        </button>
        <div class="product_content">
            <router-link 
                :to="{ 
                    name: 'Product',
                    params: {
                        id: product.id,
                        productName: product.name
                    }
                }" 
                v-for="product in productData" 
                :key="product.id"
                class="products_link"
            >
                <div class="pd_bg">
                    <img :src="`./img/source/${product.img}`"/>
                </div>
                <div class="pd_text">
                    <span>{{product.name}}</span>
                    <span>${{product.price}}</span>
                </div>
            </router-link>
        </div>
		<PageSelector></PageSelector>
    </div>
</template>

<script>
import PageSelector from "../PageSelector.vue";

export default {
    name: "ProdList",
    components:{PageSelector},
    props: ['productData'],
    methods: {
        sortOpen(){
            this.$refs.sort_down.classList.toggle('-down_on')
            this.$refs.fasArrow.classList.toggle('-i_on')
        },
        smallFilterOpen(){
            this.$parent.smallFilterOpen()
        }
    },
};
</script>

<style lang="scss" scoped>
@import '../../assets/style/prodList.scss';
</style>
