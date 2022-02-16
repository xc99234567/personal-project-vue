<template>
    <div class="qa_wrapper">
        <h2>常見問題</h2>
        <ul class="qa">
            <li class="qa_item" v-for="qa in qaData" :key="qa.id" @click="openQa">
                <span class="q_ordinal">Q{{qa.id}}</span>
                <div class="qa_text">
                    <span>{{qa.question}}</span>
                    <p class="qa_content" ref="qa_content">
                        {{qa.answer}}
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "QaContent",
    props: ['qaData'],
    methods: {
        openQa(e){
            // console.log(e.currentTarget.lastChild.lastChild.classList);
            // console.log(this.$refs.qa_content);
            e.currentTarget.lastChild.lastChild.classList.toggle('-on')
        }
    },
};
</script>

<style lang="scss" scoped>
@import '../../assets/style/qaContent.scss';
</style>
