<template>
    <main>
        <div class="product_wrapper">
            <ProdImgs :thisProductData='thisProductData'></ProdImgs>
            <ProdIntro :thisProductData='thisProductData'></ProdIntro>
        </div>
    </main>
</template>

<script>
import ProdImgs from "../components/product/ProdImgs";
import ProdIntro from "../components/product/ProdIntro.vue";
export default {
    name: "Product",
    components: { ProdImgs, ProdIntro },
    props: ["id", "productName"],
    data() {
        return {
            productData:[
				{
					id: '1',
					img: 'product1.jpg',
					name: '故宮宋代書畫郵票',
					price: '6,880',
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
					price: '6,880',
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
					price: '6,880',
					moreImg: [
						'product1-0.jpg',
						'product1-1.jpg',
						'product1-2.jpg',
						'product1-3.jpg',
						'product1-4.jpg',
					]
				},
			],
        }
    },
    computed:{
        // 回傳當前的商品資料
        thisProductData(){
            for (const prod of this.productData) {
                if(prod.id === this.id){
                    return prod;
                }
            }

            return null;
        }
    },
};
</script>

<style lang="scss" scoped>
/* 整個商品wrapper */
.product_wrapper {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    margin-bottom: 50px;
}

@media (max-width: 1199.78px) {
    .product_wrapper {
        padding: 0 20px;
        box-sizing: border-box;
    }
}

@media (max-width: 991.78px) {
    .product_wrapper {
        flex-direction: column;
        align-items: center;
    }
}
</style>
