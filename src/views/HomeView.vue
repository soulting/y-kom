<template>
  <main>
    <div class="navbar-component">
      <Navbar :isOnTop="onTop" />
    </div>
    <transition name="undertabs-animation">
      <div v-if="onTop" class="undertabs-component">
        <NavbarUndertabs />
      </div>
    </transition>
  </main>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import NavbarUndertabs from "@/components/NavbarUndertabs.vue";
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
  height: 110vh;
}

.navbar-component {
  width: 100%;
  position: fixed;
  background-color: white;
  z-index: 2;
}

.undertabs-component {
  position: sticky;
  top: 60px;
  z-index: 1;
}

.undertabs-animation-enter-from,
.undertabs-animation-leave-to {
  transform: translateY(-100%) scaleY(0);
  opacity: 0;
}

.undertabs-animation-enter-active,
.undertabs-animation-leave-active {
  transition: all 0.4s ease;
}
</style>
