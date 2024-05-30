<template>
  <div class="undertabs-content-container">
    <div v-if="categories.loaded" class="category-list">
      <div class="category-list-element" id="0">
        <p>Laptopy i komputery</p>
        <p>Wszystkie</p>
      </div>

      <div
        v-for="(element, index) in categories.categories[
          primaryCategory
        ].podkategorie.slice(0, 10)"
        :key="index"
        class="category-list-element"
        :id="index + 1"
        @mouseover="secondaryCategory = index"
      >
        <p>{{ element.nazwa }}</p>
        <img
          v-if="element.pod_podkategorie.length > 0"
          src="@/assets/right.png"
          alt="right arrow image"
        />
      </div>

      <div class="category-list-element" id="11">
        <p>Wszystkie</p>
        <p
          v-if="categories.categories[primaryCategory].podkategorie.length > 3"
          class="count"
        >
          +{{ categories.categories[primaryCategory].podkategorie.length - 10 }}
        </p>
      </div>
    </div>
    <div v-if="categories.loaded" class="category-specifics">
      <div class="specyfics-list-element" id="0">
        <p>
          {{
            categories.categories[primaryCategory].podkategorie[
              secondaryCategory
            ].nazwa
          }}
        </p>
        <p>Wszystkie</p>
      </div>

      <div class="undercategory-img-container"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  categories: {
    type: Object,
    required: true,
  },
});

const primaryCategory = 0;
const secondaryCategory = ref(0);
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
  padding-left: 15px;
}

.category-list-element,
.specyfics-list-element {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-family: Lato, sans-serif;
  height: 32px;
  width: 290px;
  padding: 0px 10px 0px 10px;
  margin: 0;
  transition: all 0.2s;
  border-radius: 10px;
}

.category-list-element:hover {
  background-color: rgb(230, 230, 230);
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
