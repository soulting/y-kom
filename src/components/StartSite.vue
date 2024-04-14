<template>
  <div class="carousel-container">
    <Carousel>
      <Slide v-for="slide in slides" :key="slide">
        <div class="carousel-item">
          <img :src="slide.image" alt="slide image" />
        </div>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

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
</script>

<style scoped>
.carousel-container {
  position: relative;
  top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-item {
  min-height: 200px;
  width: 60%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-slide {
  padding: 10px;
}

.carousel-prev,
.carousel-next {
  box-sizing: content-box;
  border: 5px solid white;
  background-color: aqua;
}
</style>
