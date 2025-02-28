<!--MySwiper-->
<template>
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
</template>

<script
    setup>
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
</script>

<style
    scoped
    lang="less">

</style>
