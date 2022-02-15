<template>
    <footer class="footer_wrapper">
        <div class="up_ele_wrapper">
            <div class="link_wrapper">
                <span>Link</span>
                <router-link :to="{ name:'ProductList'}">商品列表</router-link>
                <router-link :to="{ name:'About'}">關於我們</router-link>
                <router-link :to="{ name:'News'}">最新消息</router-link>
                <router-link :to="{ name:'Qa'}">常見問題</router-link>
                <router-link :to="{ name:'Appraisal'}">鑑定收購</router-link>
            </div>
            <div class="white_line"></div>
            <div class="follow_us">
                <span>Follow us</span>
                <a href="#"><i class="fab fa-facebook-square"></i></a>
                <a href="#" class="sns_center"
                    ><i class="fab fa-twitter-square"></i
                ></a>
                <a href="#"><i class="fab fa-instagram-square"></i></a>
            </div>
        </div>
        <div class="down_ele_wrapper">
            <p>
                本網站為緯育TibaMe前端工程師專業技術養成班第72期學員專題作品，本平台僅供學習、展示之用。
                <br />
                參考資源:
                <br />
                柚子堂、日本百貨店、Sail、クレ・ド・ポーボーテ
                <br />
                若有侵權疑慮，您可以私訊<a href="#">[緯育TibaMe]</a
                >，後續會由專人協助處理
            </p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'CommonFooter'
};
</script>

<style lang="scss" scoped>
/* footer */
.footer_wrapper {
    width: 100%;
    background-color: #b47804;
}

/* footer上面 */
.footer_wrapper .up_ele_wrapper {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
}

/* link wrapper */
.footer_wrapper .up_ele_wrapper .link_wrapper {
    width: 200px;
    margin-top: 50px;
    text-align: center;
}

/* link title */
.footer_wrapper .up_ele_wrapper .link_wrapper span {
    display: block;
    margin-bottom: 1rem;
    font-weight: bold;
}

/* link */
.footer_wrapper .up_ele_wrapper .link_wrapper a {
    display: inline-block;
    margin-bottom: 1rem;
    margin-left: 1rem;
    text-decoration: none;
    color: rgb(0, 0, 0);
}

/* link hover */
.footer_wrapper .up_ele_wrapper .link_wrapper a:hover {
    opacity: 0.5;
}

/* center line */
.footer_wrapper .up_ele_wrapper .white_line {
    width: 1px;
    background: white;
    margin: 48px 50px 30px 48px;
}

/* sns */
.footer_wrapper .follow_us {
    width: 140px;
    margin-top: 50px;
    text-align: center;
}

/* sns title */
.footer_wrapper .follow_us span {
    display: block;
    margin-bottom: 36px;
    font-weight: bold;
}

/* sns link */
.footer_wrapper .follow_us a {
    color: black;
    font-size: 28px;
}

/* sns link hover */
.footer_wrapper .follow_us a:hover {
    opacity: 0.5;
}

/* sns */
.footer_wrapper .follow_us .sns_center {
    margin: 0 10px;
}

/* 參考資料 */
.down_ele_wrapper {
    text-align: center;
}
</style>
