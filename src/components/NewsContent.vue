<template>
    <div class="news_wrapper">
        <h2>最新消息</h2>
        <div class="switch_wrapper">
            <span>顯示模式</span>
            <i class="fas fa-list cuttent_mode"></i>
            <i class="fas fa-grip-horizontal"></i>
        </div>
        <div class="news_ele">
            <a
                href="#"
                class="news"
                data-aos="fade-up"
                data-aos-duration="1000"
                v-for="news in newsContent" :key="news.id"
            >
                <img :src="`./img/source/${news.img}`" alt="" />
                <div class="news_text">
                    <span class="news_date">{{news.date}}</span>
                    <span class="news_title">{{news.title}}</span>
                    <span class="news_content">
                        {{news.content}}
                    </span>
                    <span class="news_read">Read more</span>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NewsContent',
    props: ['newsContent']
};
</script>

<style lang="scss" scoped>
@import '../assets/style/newsContent.scss';
</style>