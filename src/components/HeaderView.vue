<template>
<div
        class="h-64 bg-black">
    <div class="flex items-center justify-between w-1280 mx-a max-lg:w-full h-64">
        <div class="flex items-center">
            <el-icon
                    class="text-white mr-25 text-30">
                <Menu />
            </el-icon>
            <img src="../assets/logo.svg"
                 class="w-30"
                 alt="">
        </div>
        <div class="flex items-center">
            <RouterLink
                    class="text-white text-18 mr-32 flex-shrink-0"
                    to="/">
                首页
            </RouterLink>
            <RouterLink
                    class="text-white text-18 mr-32 flex-shrink-0"
                    to="/details">
                详情
            </RouterLink>
            <el-input
                    v-model="input3"
                    style="max-width: 500px"
                    placeholder="Please input"
                    class="input-with-select"
            >
                <template
                        #append>
                    <el-button
                            :icon="Search" />
                </template>
            </el-input>
        </div>
    </div>

</div>
</template>

<script setup>
import {
    onMounted,
    ref,
} from "vue";
import {
    Search
} from '@element-plus/icons-vue'
import bus
    from "../bus";

onMounted(() => {
    // 接收全局事件总线
    bus.on('msg', (val) => {
        console.log('val', val);
    })
})

const input3 = ref('')

</script>

<style
    scoped
    lang="less">
</style>
