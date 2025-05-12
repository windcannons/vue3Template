<template>
<div class="index">
    <h1>
        {{ userStore.count }}</h1>
    <el-button @click="add" type="success">
        +
    </el-button>

    <MySwiper></MySwiper>

    <MyEcharts></MyEcharts>
</div>
</template>

<script
    setup>
//调用store示例
import {
    useUserStore
} from '@/stores/counter'
import bus from "@/bus/index.js";

const userStore = useUserStore()
let add = () => {
    // isShowFotBox.value = false
    userStore.increment();
    // 接口请求示例
    // reportTypeList(2).then(res => {
    //     console.log(res)
    // })

    // 全局事件总线传参
    bus.emit('msg', {name: '小黑'})

}

// 跳转
// router.push({path: '/orderDetail'})
//router.push({
//    path: '/about',
//    query: {id:info.id}
//})
// 拿取参数
// import {
//     useRoute
// } from "vue-router";
//
// const route = useRoute();
// route.query.id

</script>

<style
    scoped lang="less">
</style>
