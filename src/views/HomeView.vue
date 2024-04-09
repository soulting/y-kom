<template>
  <Navbar />
  <NavbarUndertabs />
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import NavbarUndertabs from "@/components/NavbarUndertabs.vue";
import { ref } from "vue";

const onTop = ref(true);
</script>
