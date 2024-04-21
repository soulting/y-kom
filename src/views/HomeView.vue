<template>
  <main>
    <div class="navbar-component">
      <Navbar :isOnTop="onTop" />
    </div>
    <div class="start-site-container">
      <StartSite />
    </div>
    <NavbarUntertabsContent :categories="categories" />
  </main>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import StartSite from "@/components/StartSite.vue";
import NavbarUntertabsContent from "@/components/NavbarUntertabsContent.vue";
import getCategories from "@/composables/getCategories";
import { computed, onMounted, ref } from "vue";
const categories = ref({ loaded: false });
onMounted(async () => {
  categories.value = await getCategories();
  console.log(categories.value);
});

const onTop = ref(true);

window.addEventListener("scroll", () => {
  onTop.value = window.scrollY === 0;
});
</script>

<style scoped>
main {
  padding: 0px;
  margin: 0px;
  height: 210vh;
}

.navbar-component {
  width: 100%;
  position: fixed;
  z-index: 101;
}

.start-site-container {
  position: relative;
  top: 130px;
}
</style>
