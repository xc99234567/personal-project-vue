<template>
    <div class="news_wrapper">
        <div class="news_content_wrapper">
            <div class="img_wrapper" data-aos="zoom-in">
                <h2 class="news_title">
                    最新消息
                    <i class="fas fa-arrow-right"></i>
                </h2>
            </div>
            <ul class="news_ele_wrapper">
                <li
                    class="news_ele"
                    data-aos="zoom-in-right"
                >
                    <router-link :to="{ name: 'News' }" class="news_link">
                        <span class="news_date">2021/10/20</span>
                        <span class="news_title"
                            >各式收藏品展覽活動將於今年12/15展開！</span
                        >
                    </router-link>
                </li>
                <li
                    class="news_ele"
                    data-aos="zoom-in-right"
                >
                    <router-link :to="{ name: 'News' }" class="news_link">
                        <span class="news_date">2021/09/30</span>
                        <span class="news_title"
                            >最新商品已上架，歡迎參考！！！！</span
                        >
                    </router-link>
                </li>
                <li
                    class="news_ele"
                    data-aos="zoom-in-right"
                >
                    <router-link :to="{ name: 'News' }" class="news_link">
                        <span class="news_date">2021/09/25</span>
                        <span class="news_title">臨時休息通知</span>
                    </router-link>
                </li>
                <router-link :to="{ name: 'News' }" class="read_more"
                    >最新消息一覽>></router-link
                >
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "IndexNews",
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/indexNews.scss";
</style>
