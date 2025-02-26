<template>
<div class="index">
    <h1>
        {{ userStore.count }}</h1>
    <button @click="add">
        ++
    </button>
    <div class="swiper mySwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
            <div class="swiper-slide">Slide 4</div>
            <div class="swiper-slide">Slide 5</div>
            <div class="swiper-slide">Slide 6</div>
            <div class="swiper-slide">Slide 7</div>
            <div class="swiper-slide">Slide 8</div>
            <div class="swiper-slide">Slide 9</div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="pagination"></div>
    </div>
    <div
        id="ichart"
        ref="Chart"
        style="height: 900px;width: 900px;;margin-top: 100px"
    />
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
import * as echarts from 'echarts';

import {
    reactive,
} from "vue";
import bus
    from "../bus";

onMounted(()=>{
    initChart()
})

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

let obj1 = reactive({})
let obj2 = {a: 1}
// 给数组赋值
Object.assign(obj1, obj2);

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

//轮播图
import {
    onMounted
} from "vue";
import Swiper, {
    Navigation,
    Pagination,
    Autoplay
} from 'swiper'
Swiper.use([Autoplay,Navigation, Pagination])

onMounted(()=>{
    new Swiper(".mySwiper", {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.pagination',
            clickable: true,
        },
    });
})
// echarts
const initChart =  ()=> {
    const chart = echarts.init(document.getElementById('ichart'))
    const option = {
        title: {
            text: 'Stacked Line'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'Email',
                type: 'line',
                stack: 'Total',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Union Ads',
                type: 'line',
                stack: 'Total',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: 'Video Ads',
                type: 'line',
                stack: 'Total',
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: 'Direct',
                type: 'line',
                stack: 'Total',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: 'Search Engine',
                type: 'line',
                stack: 'Total',
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    };
    chart.setOption(option)
}
</script>

<style
    scoped lang="less">
h1{
  font-size: 20rem;
}
</style>
