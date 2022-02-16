<template>
    <main>
		<BannerPage :bannerImg="bannerImg"></BannerPage>
		<div class="product_wrapper">
			<ProdListFilter :filterData="filterData" ref="prodListFilter"></ProdListFilter>
			<ProdList :productData="productData"></ProdList>
		</div>
	</main>
</template>

<script>
import BannerPage from "../components/BannerPage.vue";
import ProdListFilter from "../components/productList/ProdListFilter.vue";
import ProdList from "../components/productList/ProdList.vue";
export default {
    name: "ProductList",
    components:{BannerPage, ProdListFilter, ProdList},
    data() {
        return {
            currentPage: "productList",
            bannerImg: "banner_product.jpg",
			productData:[
				{
					id: '1',
					img: 'product1.jpg',
					name: '故宮宋代書畫郵票',
					price: '6880',
					moreImg: [
						'product1-0.jpg',
						'product1-1.jpg',
						'product1-2.jpg',
						'product1-3.jpg',
						'product1-4.jpg',
					]
				},
				{
					id: '2',
					img: 'product2.jpg',
					name: '中華民國十年 袁大頭',
					price: '18,880',
					moreImg: [
						'2-0.jpg',
						'2-1.jpg',
						'2-2.jpg',
						'2-3.jpg',
						'2-4.jpg',
					]
				},
				{
					id: '3',
					img: 'product3.jpg',
					name: '台灣寶島郵票',
					price: '9,999',
					moreImg: [
						'3-0.jpg',
						'3-1.jpg',
						'3-2.jpg',
						'3-3.jpg',
					]
				},
				{
					id: '4',
					img: 'product4.jpg',
					name: '中國農民銀行 一角',
					price: '1,500',
					moreImg: [
						'4-0.jpg',
						'4-1.jpg',
					]
				},
				{
					id: '5',
					img: 'product3.jpg',
					name: '台灣寶島郵票',
					price: '9,999',
					moreImg: [
						'3-0.jpg',
						'3-1.jpg',
						'3-2.jpg',
						'3-3.jpg',
					]
				},
				{
					id: '6',
					img: 'product4.jpg',
					name: '中國農民銀行 一角',
					price: '1,500',
					moreImg: [
						'4-0.jpg',
						'4-1.jpg',
					]
				},
				{
					id: '7',
					img: 'product1.jpg',
					name: '故宮宋代書畫郵票',
					price: '6880',
					moreImg: [
						'product1-0.jpg',
						'product1-1.jpg',
						'product1-2.jpg',
						'product1-3.jpg',
						'product1-4.jpg',
					]
				},
				{
					id: '8',
					img: 'product2.jpg',
					name: '中華民國十年 袁大頭',
					price: '18,880',
					moreImg: [
						'2-0.jpg',
						'2-1.jpg',
						'2-2.jpg',
						'2-3.jpg',
						'2-4.jpg',
					]
				},
				{
					id: '9',
					img: 'product3.jpg',
					name: '台灣寶島郵票',
					price: '9,999',
					moreImg: [
						'3-0.jpg',
						'3-1.jpg',
						'3-2.jpg',
						'3-3.jpg',
					]
				},
				{
					id: '10',
					img: 'product2.jpg',
					name: '中華民國十年 袁大頭',
					price: '18,880',
					moreImg: [
						'2-0.jpg',
						'2-1.jpg',
						'2-2.jpg',
						'2-3.jpg',
						'2-4.jpg',
					]
				},
				{
					id: '11',
					img: 'product4.jpg',
					name: '中國農民銀行 一角',
					price: '1,500',
					moreImg: [
						'4-0.jpg',
						'4-1.jpg',
					]
				},
				{
					id: '12',
					img: 'product1.jpg',
					name: '故宮宋代書畫郵票',
					price: '6880',
					moreImg: [
						'product1-0.jpg',
						'product1-1.jpg',
						'product1-2.jpg',
						'product1-3.jpg',
						'product1-4.jpg',
					]
				},
			],
			filterData: [
				{
					id: '1',
					name: '國家',
					options: [
						'台灣',
						'中國',
						'日本',
						'其他'
					]
				},
				{
					id: '2',
					name: '新舊程度',
					options: [
						'全新',
						'九成新以上',
						'八成新以上',
						'八成新以下'
					]
				}
			]
        };
    },
    mounted() {
        this.$bus.$emit("currentPage", this.currentPage);
    },
	methods: {
		smallFilterOpen(){
			let filterWrapper = this.$refs.prodListFilter.$refs.filterWrapper
			filterWrapper.classList.add('-wrapper-on')
		}
	},
};
</script>

<style lang="scss" scoped>
/* 整個商品區 */
.product_wrapper{
    max-width: 1200px;
    width: 100%;
    margin: 50px auto;
    display: flex;
    /* position: relative; */
}

@media (max-width: 1199.98px){
    .product_wrapper{
        box-sizing: border-box;
        padding: 0 10px;
    }
}
</style>
