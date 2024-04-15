<template>
  <nav
    class="main-navbar"
    :style="{
      'box-shadow': isOnTop
        ? 'none'
        : ' 0px 0px 5px 1px rgba(197, 197, 197, 1)',
      height: isOnTop ? '72px' : '56px',
    }"
  >
    <div class="logo-container">
      <img src="@/assets/logo-text.png" alt="y-kom logo text" />
      <transition name="hamburger-menu-container-transmision">
        <div v-if="!isOnTop" class="hamburger-menu-container"></div>
      </transition>
      <transition name="hamburger-transition">
        <img
          v-if="!isOnTop"
          class="hamburger-menu"
          src="@/assets/hamburger.png"
          alt="hamburgermenu logo"
        />
      </transition>

      <transition name="logo-transition"> </transition>
      <img
        src="@/assets/logo.png"
        alt="y-kom logo"
        :style="{ transform: isOnTop ? 'scale(1)' : 'scale(0.8)' }"
      />
    </div>

    <div class="search-input-container">
      <input class="serch-input" type="text" placeholder="Czego szukasz?" />
      <button class="serch-input-button">
        <img src="@/assets/search.png" alt="search icon" />
      </button>
    </div>
    <div class="tab" id="tab-1">
      <img
        src="@/assets/headphone.png"
        alt="headphones icon"
        :style="{ top: isOnTop ? '0' : '7.5px' }"
      />
      <transition name="paragraph-transition">
        <p v-if="isOnTop">Pomoc i kontakt</p>
      </transition>
    </div>
    <div class="tab" id="tab-2">
      <img
        src="@/assets/person.png"
        alt="head icon"
        :style="{ top: isOnTop ? '0' : '7.5px' }"
      />
      <transition name="paragraph-transition">
        <p v-if="isOnTop">Twoje konto</p>
      </transition>
    </div>
    <div class="tab" id="tab-3">
      <img
        src="@/assets/heart.png"
        alt="heart icon"
        :style="{ top: isOnTop ? '0' : '7.5px' }"
      />
      <transition name="paragraph-transition">
        <p v-if="isOnTop">Twoje listy</p>
      </transition>
    </div>
    <div class="tab" id="tab-4">
      <img
        src="@/assets/shopping-cart.png"
        alt="cart icon"
        :style="{ top: isOnTop ? '0' : '7.5px' }"
      />
      <transition name="paragraph-transition">
        <p v-if="isOnTop">Koszyk</p>
      </transition>
    </div>
  </nav>
  <transition name="undertabs-animation">
    <div v-if="isOnTop" class="undertabs-component">
      <NavbarUndertabs />
    </div>
  </transition>
</template>

<script setup>
import NavbarUndertabs from "@/components/NavbarUndertabs.vue";
const props = defineProps({
  isOnTop: {
    type: Boolean,
    required: true,
  },
});
</script>

<style scoped>
.main-navbar {
  padding: 10px;
  padding-left: 150px;
  padding-right: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.4s ease;
  z-index: 101;
  background-color: white;
  position: relative;
}

img {
  height: 40px;
  transition: all 0.3 ease;
}

.search-input-container {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid rgb(204, 204, 204);
  height: 30px;
  padding-left: 10px;
  height: 40px;
  width: 490px;
}

.serch-input {
  height: 90%;
  width: 90%;
  border: none;
}

.serch-input:focus {
  border: none;
  outline: none;
}

.serch-input-button {
  height: 100%;
  border: none;
  border-radius: 7px;
  background: rgb(68, 68, 68);
  width: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.serch-input-button:hover {
  background: rgb(40, 40, 40);
}

.serch-input-button img {
  height: 75%;
}

.tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0px;
  margin: 0px;
  min-width: 40px;
  position: relative;
}

.tab img {
  height: 25px;
  background-color: white;
  z-index: 2;
  position: absolute;
  transition: all 0.3s;
}
.tab p {
  height: 10px;
  margin: 2px;
  font-size: 11px;
  font-family: Arial, Helvetica, sans-serif;
  white-space: nowrap;
  z-index: 1;
  transition: all 0.3s ease;
  position: absolute;
  bottom: 0;
}

.logo-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-container img {
  transition: all 0.3s ease;
}
.hamburger-menu-container {
  display: flex;
  align-items: flex-start;
  position: fixed;
  width: 100px;
  height: 50px;
  background-color: rgb(255, 255, 255);
}

.hamburger-menu {
  height: 37px;
  background-color: rgb(242, 242, 242);
  border-radius: 5px;
  padding: 10px;
  position: fixed;
}

.paragraph-transition-enter-from,
.paragraph-transition-leave-to {
  transform: translateY(-100%) scaleX(0);
  opacity: 0;
}

.paragraph-transition-enter-active,
.paragraph-transition-leave-active {
  transition: all 0.3s ease;
}

.logo-transition-enter-from,
.logo-transition-leave-to {
  transform: scale(0.6);
}

.logo-transition-enter-active,
.logo-transition-leave-active {
  transition: all 0.3s ease;
}

.hamburger-transition-enter-from,
.hamburger-transition-leave-to {
  transform: scale(0);
}

.hamburger-transition-enter-active,
.hamburger-transition-leave-active {
  transition: all 0.5s ease;
}

.hamburger-menu-container-transmision-enter-from,
.hamburger-menu-container-transmision-leave-to {
  transform: translateX(-100%);
}

.hamburger-menu-container-transmision-enter-active,
.hamburger-menu-container-transmision-leave-active {
  transition: all 0.3s ease;
}

.undertabs-component {
  position: absolute;
  top: 72px;
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
