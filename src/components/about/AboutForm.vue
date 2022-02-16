<template>
    <div class="contact_wrapper">
        <div class="content_wrapper">
            <h2>聯繫我們</h2>
            <form action="#">
                <div class="text_ele">
                    <label for="title">主旨：</label>
                    <br />
                    <input type="text" name="title" />
                    <div class="black_line"></div>
                </div>
                <div class="text_ele">
                    <label for="name">稱呼：</label>
                    <br />
                    <input type="text" name="name" />
                    <div class="black_line"></div>
                </div>
                <div class="text_ele">
                    <label for="phone">電話或手機：</label>
                    <!-- <span>輸入格式錯誤</span> -->
                    <br />
                    <input type="text" name="phone" />
                    <div class="black_line"></div>
                </div>
                <div class="text_ele">
                    <label for="email">電子郵件：</label>
                    <br />
                    <input type="text" name="email" />
                    <div class="black_line"></div>
                </div>
                <div class="text_ele">
                    <label for="content">內容：</label>
                    <br />
                    <textarea name="content" cols="30" rows="10"></textarea>
                    <div class="black_line"></div>
                </div>
                <button type="submit">確認提交</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutForm'
};
</script>

<style lang="scss" scoped>
@import '../../assets/style/aboutForm.scss';
</style>
