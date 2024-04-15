<template>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        :class="{ 'carousel-item': true, active: index === 0 }"
      >
        <img :src="slide.image" class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ slide.title }}</h5>
          <p>{{ slide.content }}</p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import "bootstrap/dist/js/bootstrap.js";

const slides = ref([
  {
    id: 1,
    title: "First slide",
    content: "This is the content of the first slide",
    image: "https://via.placeholder.com/800x400?text=First+Slide",
  },
  {
    id: 2,
    title: "Second slide",
    content: "This is the content of the second slide",
    image: "https://via.placeholder.com/800x400?text=Second+Slide",
  },
  {
    id: 3,
    title: "Third slide",
    content: "This is the content of the third slide",
    image: "https://via.placeholder.com/800x400?text=Third+Slide",
  },
]);
</script>

<style scoped>
@import "~bootstrap/dist/css/bootstrap.css";
@import "~bootstrap-vue/dist/bootstrap-vue.css";
</style>
