<template>
  <main>
    <div class="navbar-component">
      <Navbar :isOnTop="onTop" />
    </div>

    <StartSite />
  </main>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";

import StartSite from "@/components/StartSite.vue";
import { computed, ref } from "vue";

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
</style>
