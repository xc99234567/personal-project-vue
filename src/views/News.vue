<template>
    <main>
        <BannerPage :bannerImg="bannerImg"></BannerPage>
        <NewsContent :newsContent="newsContent"></NewsContent>
        <PageSelector></PageSelector>

    </main>
</template>

<script>
import BannerPage from "../components/BannerPage.vue";
import NewsContent from "../components/news/NewsContent.vue";
import PageSelector from "../components/PageSelector.vue";
export default {
    name: "News",
    components: { BannerPage, NewsContent, PageSelector },
    data() {
        return {
            currentPage: "news",
            bannerImg: "banner_news2.jpg",
            newsContent: [
                {
                    id: '1',
                    img: 'news1.jpg',
                    date: '2021/10/20',
                    title: '各式收藏品展覽活動將於今年12/15展開！',
                    content: '將於今年的12/15日在本店舉辦收藏品展覽，將展出本店的各式收藏，以及其他願意參展的收藏家的收藏，歡迎各位收藏家蒞臨參觀。'
                },
                {
                    id: '2',
                    img: 'news2.jpg',
                    date: '2021/09/30',
                    title: '新商品已上架，歡迎選購！',
                    content: '最新商品已經上架，歡迎各位商藏家自行參考選購。'
                },
                {
                    id: '3',
                    img: 'news3.jpg',
                    date: '2021/09/20',
                    title: '本店於明日21號，臨時休息一天！',
                    content: '本店於明天9月21號，臨時休息一天，請各位收藏家注意。'
                },
                {
                    id: '4',
                    img: 'news1.jpg',
                    date: '2021/10/20',
                    title: '各式收藏品展覽活動將於今年12/15展開！',
                    content: '將於今年的12/15日在本店舉辦收藏品展覽，將展出本店的各式收藏，以及其他願意參展的收藏家的收藏，歡迎各位收藏家蒞臨參觀。'
                },
                {
                    id: '5',
                    img: 'news2.jpg',
                    date: '2021/09/30',
                    title: '新商品已上架，歡迎選購！',
                    content: '最新商品已經上架，歡迎各位商藏家自行參考選購。'
                },
            ],
        };
    },
    mounted() {
        this.$bus.$emit("currentPage", this.currentPage);
    },
};
</script>

<style lang="scss" scoped>

</style>
