<template>
<div class="index">
    <h1>
        {{ userStore.count }}</h1>
    <button @click="add">
        ++
    </button>
</div>
</template>

<script
    setup>
//调用store示例
import {
    useUserStore
} from '@/stores/counter'
import {
    reportTypeList
} from "@/axios/list/reportTypeList";

import {
    reactive,
} from "vue";
import bus
    from "../bus";

const userStore = useUserStore()

let add = () => {
    // isShowFotBox.value = false
    userStore.increment();
    // 请求示例
    // reportTypeList(2).then(res => {
    //     console.log(res)
    // })


    // 全局事件总线传参
    bus.emit('msg', {name: '小黑'})

}

let obj1 = reactive({})
let obj2 = {a: 1}
// 给数组赋值
Object.assign(obj1, obj2);

// 跳转
// router.push({path: '/orderDetail'})]
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
h1{
  font-size: 20rem;
}
</style>
