<template>
    <header>
        <h1 class="logo">
            <router-link :to="{ name: 'Index' }">
                <img src="../assets/imgs/logo.png" alt="" />
            </router-link>
        </h1>
        <nav>
            <ul class="menu_wrapper" ref="menu_wrapper">
                <li class="nav_link">
                    <router-link :to="{ name: 'About' }" class="page_link"
                        >關於我們</router-link
                    >
                </li>
                <li class="nav_link">
                    <router-link :to="{ name: 'News' }" class="page_link"
                        >最新消息</router-link
                    >
                </li>
                <li class="nav_link product">
                    <a
                        href="#/productList"
                        class="page_link"
                        @click="product_list"
                    >
                        商品列表
                        <i class="fas fa-chevron-up" ref="pro_list_icon"></i>
                    </a>
                    <div class="product_popover" ref="product_popover">
                        <router-link
                            :to="{ name: 'ProductList' }"
                            class="product_link"
                        >
                            <div class="product_category_name">郵票</div>
                        </router-link>
                        <router-link
                            :to="{ name: 'ProductList' }"
                            class="product_link coin"
                        >
                            <div class="product_category_name">硬幣</div>
                        </router-link>
                        <router-link
                            :to="{ name: 'ProductList' }"
                            class="product_link"
                        >
                            <div class="product_category_name">紙幣</div>
                        </router-link>
                    </div>
                </li>
                <li class="nav_link">
                    <router-link :to="{ name: 'Appraisal' }" class="page_link"
                        >鑑定收購</router-link
                    >
                </li>
                <li class="nav_link">
                    <router-link :to="{ name: 'Qa' }" class="page_link"
                        >常見問題</router-link
                    >
                </li>
            </ul>
            <div class="icon_wrapper">
                <a href="#" aria-label="會員" class="icon_link">
                    <i class="fas fa-user"></i>
                </a>
                <a href="#" class="icon_link">
                    <i class="fas fa-shopping-cart cart">
                        <div class="delta"></div>
                        <div class="cart_popover_wrapper">
                            <i class="fas fa-cart-plus"></i>
                            <span>目前尚無商品</span>
                        </div>
                    </i>
                </a>
                <button
                    class="hamburger hamburger--slider"
                    type="button"
                    ref="hamBtn"
                    @click="hamburger"
                >
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
            <div class="mask" ref="mask"></div>
        </nav>
    </header>
</template>

<script>
export default {
    name: "NavHeader",
    data() {
        return {
            currentPage: null,
        };
    },
    methods: {
        // 漢堡按鈕功能
        hamburger() {
            // 按鈕改變
            this.$refs.hamBtn.classList.toggle("is-active");
            // 展開選單
            this.$refs.menu_wrapper.classList.toggle("menu-on");
            // 黑幕展開
            this.$refs.mask.classList.toggle("mask-on");
        },
        // 小畫面的商品選單展開功能
        product_list(e) {
            e.preventDefault();
            if (window.innerWidth <= 768) {
                // 箭頭旋轉
                this.$refs.pro_list_icon.classList.toggle("i-turn");
                // 展開
                this.$refs.product_popover.classList.toggle("ham-on");
            }
        },
    },
    mounted() {
        this.$bus.$on("currentPage", (currentPage) => {
            this.currentPage = currentPage;
        });
    },
    beforeDestroy() {
        this.$bus.$off('currentPage');
    },
    watch: {
        // 標示當前頁面
        currentPage(){
            let liArr = this.$refs.menu_wrapper.children;
            for (const li of liArr) {
                if (li.firstChild.href.includes(this.currentPage)) {
                    li.classList.add("current_page");
                } else {
                    li.classList.remove("current_page");
                }
            }
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/hamburgers.min.css";
@import "../assets/style/navHeader.scss";
</style>
