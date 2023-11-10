<template>
    <div class="meView">
        <input
                type="text"
                name=""
                @input="setInp"
                id="">
        <p>{{text}}</p>
    </div>
</template>

<script
    setup>
import {
    debounceFn
} from "@/plugins/utils";
import {
    ref
} from "vue";
let text = ref("😊")

// 方法触发的防抖 可手动配置时间
const setInp = debounceFn(((e) => {
    text.value = e.srcElement.value
}), 500)
</script>

<style
    scoped lang="less">
.meView{
    height: 60vh;
    background-color: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    p{
        margin-top: 100px;
    }
    input{
        width: 50vw;
        height: 40px;
        border-radius: 999px;
        padding-left: 10px;
    }
}
</style>
