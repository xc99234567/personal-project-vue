<template>
    <main>
        <BannerPage :bannerImg="bannerImg"></BannerPage>
        <QaContent :qaData="qaData"></QaContent>
    </main>
</template>

<script>
import BannerPage from "../components/BannerPage.vue";
import QaContent from "../components/qa/QaContent.vue";
export default {
    name: "Qa",
    components: {
        BannerPage,
        QaContent,
    },
    data() {
        return {
            currentPage: "qa",
            bannerImg: "banner_qa.jpg",
            qaData: [
				{
					id: '1',
					question: '不知道該如何將郵票分類？',
					answer: '不常在接觸的人確實會有這個困擾，如果真的不知道的話，歡迎與我們聯繫詢問。'
				},
				{
					id: '2',
					question: '鑑定前聯絡時，收藏品的照片該如何拍攝？',
					answer: '不用每項商品都分別拍攝，只要一張拍攝到全部收藏的照片即可。'
				},
				{
					id: '3',
					question: '保存狀態不太好看起來很舊了，也能鑑定嗎？',
					answer: '保存狀態對於收藏來說很致命，不過也歡迎與我們聯繫，如果在容許範圍內我們依然會收購!!!!!!'
				},
				{
					id: '4',
					question: '如果透過郵寄鑑定後，無法收購能協助處分掉嗎？',
					answer: '若是後續處理需要協助處分掉是沒問題的，也不需要另外收費。'
				},
				{
					id: '5',
					question: '透過郵寄鑑定的郵資需要自己負擔嗎？',
					answer: '是的，無論是寄送來時，或是確認無法收購後需要寄回，皆是需要自行負擔的。'
				},
			],
        };
    },
    mounted() {
        this.$bus.$emit("currentPage", this.currentPage);
    },
};
</script>

<style></style>
