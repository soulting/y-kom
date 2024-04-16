<template>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
    data-bs-touch="true"
  >
    <div class="carousel-inner">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        :class="{ 'carousel-item': true, active: index === activSlide }"
        data-bs-interval="4000"
      >
        <img :src="slide.image" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block"></div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
      type="button"
    >
      <img src="@/assets/left.png" alt="" />
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
      type="button"
    >
      <img src="@/assets/right.png" alt="" />
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    <div class="carousel-indicators">
      <div
        class="carousel-indicators-custom"
        v-for="(slide, index) in slides"
        :key="index"
        data-bs-target="#carouselExampleControls"
        :data-bs-slide-to="index"
        :class="{
          active: index === activSlide,
        }"
      >
        {{ slide.title }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import "bootstrap/dist/js/bootstrap.js";

const slides = [
  {
    id: "1",
    title: "Urządzenia peryferyjne taniej do 30%",
    image: require("@/assets/carousel-imgs/1442x316,,9a440d844a634550a469466c1ee0001f.webp"),
  },
  {
    id: "2",
    title: "Promocja 100x100",
    image: require("@/assets/carousel-imgs/1442x316,,36b557c6e906431c98d68b8d801c6caf.webp"),
  },
  {
    id: "3",
    title: "Cashback dla nauczycieli",
    image: require("@/assets/carousel-imgs/1442x316,,42f649a0c04b436a9f0349076693c05f.webp"),
  },
  {
    id: "4",
    title: "Laptop dla nauczyciela",
    image: require("@/assets/carousel-imgs/1442x316,,83d28d20a59f4b2da844a2af9102200b.webp"),
  },
  {
    id: "5",
    title: "Premiera Sony ULT",
    image: require("@/assets/carousel-imgs/1442x316,,b97c53932a5d4306b839f6f577e0a62d.webp"),
  },
];

const activSlide = ref(0);
const activTag = ref(0);

const nextSlide = () => {};

const prevSlide = () => {};
</script>

<style scoped>
@import "~bootstrap/dist/css/bootstrap.css";
@import "~bootstrap-vue/dist/bootstrap-vue.css";

.carousel-indicators-custom.active {
  font-weight: bold;
  border-top: 4px solid rgb(40, 40, 40);
  border-left: 4px solid rgb(255, 255, 255);
  border-right: 4px solid rgb(255, 255, 255);
}

.carousel-indicators {
  position: absolute;
  display: flex;
  bottom: -48px;
  align-items: center;
  justify-content: space-between;
  width: 77%;
  margin: 0;
  left: 11.5%;
  right: 11%;
}

.carousel-indicators-custom {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 14px;
  height: 45px;
  border-bottom-right-radius: 7px;
  border-bottom-left-radius: 7px;
  text-align: center;
  cursor: pointer;
  text-indent: 0;
  margin: 0;
  padding: 10;
  border: none;
}
.carousel-indicators-custom:hover {
  background-color: rgb(225, 225, 225);
}

.carousel {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
}

.carousel-inner {
  height: 250px;
  width: 80%;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 2px 1px;
}

.carousel-control-prev,
.carousel-control-next {
  background-color: rgb(255, 255, 255);
  width: 40px;
  height: 40px;
  border-radius: 10px;
  opacity: 1;
  top: 40%;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 2px 1px;
}

.carousel-control-prev img,
.carousel-control-next img {
  height: 35px;
  padding-left: 3px;
}

.carousel-control-prev {
  left: 8.5%;
}

.carousel-control-next {
  right: 8.5%;
}

.carousel-control-prev:hover {
  background-color: rgb(225, 225, 225);
}

.carousel-control-next:hover {
  background-color: rgb(225, 225, 225);
}
</style>
