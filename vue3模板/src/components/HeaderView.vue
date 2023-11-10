<template>
<div
    class="headerView">
  <RouterLink to="/">
      首页
  </RouterLink>
    <RouterLink to="/details">
        首页
    </RouterLink>
</div>
</template>

<script setup>
import {
    onMounted,
} from "vue";
import bus
    from "../bus";

onMounted(() => {
    // 接收全局事件总线
    bus.on('msg', (val) => {
        console.log('val', val);
    })
})

</script>

<style
    scoped
    lang="less">

</style>
