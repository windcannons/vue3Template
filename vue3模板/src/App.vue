<template>
    <div class="App">
        <HeaderView></HeaderView>
        <div class="top"></div>
        <RouterView></RouterView>
        <div class="fot"></div>
        <FooterView></FooterView>
    </div>
</template>
<script setup>
import HeaderView
    from "@/components/HeaderView.vue";
import FooterView
    from "@/components/FooterView.vue";
import {
    watch
} from "vue";
import {
    useRoute
} from "vue-router";

const route = useRoute();
// 检测页面跳转时滚动到顶部
watch(
    () => route,
    (to, from) => {
        window.scrollTo(0, 0)
    }, {deep: true}
);
</script>
<style scoped lang="less">
</style>
