<template>
  <main>
    <Navbar />
    <NavbarUndertabs v-if="onTop" />
  </main>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import NavbarUndertabs from "@/components/NavbarUndertabs.vue";
import { computed, ref } from "vue";

const onTop = computed(() => {
  return window.scrollY === 0;
});
</script>

<style scoped>
body {
  margin: 0px;
  padding: 0px;
}

main {
  padding: 0px;
  margin: 0px;
  height: 110vh;
}
</style>
