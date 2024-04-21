<template>
  <div class="undertabs-content-container">
    <div v-if="categories.loaded" class="category-list">
      <div class="category-list-element" id="0">
        <p>Laptopy i komputery</p>
        <p>Wszystkie</p>
      </div>

      <div
        v-for="(element, index) in categories.categories[
          primeCategory
        ].podkategorie.slice(0, 10)"
        :key="index"
        class="category-list-element"
        :id="index + 1"
      >
        <p>{{ element.nazwa }}</p>
        <img
          v-if="element.pod_podkategorie"
          src="@/assets/right.png"
          alt="right arrow image"
        />
      </div>

      <div
        v-if="categories.loaded !== false"
        class="category-list-element"
        id="11"
      >
        <p>Wszystkie</p>
        <p
          v-if="categories.categories[primeCategory].podkategorie.length > 3"
          class="count"
        >
          +{{ categories.categories[primeCategory].podkategorie.length - 10 }}
        </p>
      </div>
    </div>
    <div class="category-specifics">
      <div class="specyfics-list-element" id="0">
        <p>Laptopy i komputery</p>
        <p>Wszystkie</p>
      </div>
      <div class="specyfics-list-element" id="1">
        <p>Pod-Podkategoria 1</p>
      </div>
      <div class="specyfics-list-element" id="2">
        <p>Pod-Podkategoria 2</p>
      </div>
      <div class="specyfics-list-element" id="3">
        <p>Pod-Podkategoria 3</p>
      </div>
      <div class="specyfics-list-element" id="4">
        <p>Pod-Podkategoria 4</p>
      </div>
      <div class="specyfics-list-element" id="5">
        <p>Pod-Podkategoria 5</p>
      </div>
      <div class="specyfics-list-element" id="6">
        <p>Pod-Podkategoria 6</p>
      </div>
      <div class="specyfics-list-element" id="7">
        <p>Pod-Podkategoria 7</p>
      </div>
      <div class="specyfics-list-element" id="8">
        <p>Pod-Podkategoria 8</p>
      </div>
      <div class="specyfics-list-element" id="9">
        <p>Pod-Podkategoria 9</p>
      </div>
      <div class="specyfics-list-element" id="10">
        <p>Pod-Podkategoria 10</p>
      </div>
      <div class="specyfics-list-element" id="11">
        <p>Wszystkie</p>
        <p class="count">+6</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  categories: {
    type: Object,
    required: true,
  },
});

const primeCategory = 0;
</script>

<style>
.undertabs-content-container {
  display: flex;
  position: absolute;
  background-color: white;
  z-index: 200;
  width: 662px;
  height: 416px;
  padding: 8px 0px 24px;
  overflow: hidden;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-left: 10px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 4px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 2px 1px;
}

.category-list,
.category-specifics {
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
}

.category-list-element,
.specyfics-list-element {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-family: Lato, sans-serif;
  height: 32px;
  width: 290px;
  padding: 0px 22px 0px 24px;
  margin: 0;
}

.category-list-element p,
.specyfics-list-element p {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}

.count {
  width: 25px;
}

.category-list-element img {
  margin-top: 6px;
  margin-bottom: 6px;
  height: 20px;
}
</style>
