<template>
  <div class="undertabs-content-container">
    <div class="category-list">
      <div class="category-list-element" id="0">
        <p>Laptopy i komputery</p>
        <p>Wszystkie</p>
      </div>
      <div class="category-list-element" id="1">
        <p class="category-list-element-title">Podkategoria 1</p>
        <img src="@/assets/right.png" alt="right arrow image" />
      </div>
      <div class="category-list-element" id="2">
        <p class="category-list-element-title">Podkategoria 2</p>
        <img src="@/assets/right.png" alt="right arrow image" />
      </div>
      <div class="category-list-element" id="3">
        <p class="category-list-element-title">Podkategoria 3</p>
        <img src="@/assets/right.png" alt="right arrow image" />
      </div>
      <div class="category-list-element" id="4">
        <p class="category-list-element-title">Podkategoria 4</p>
        <img src="@/assets/right.png" alt="right arrow image" />
      </div>
      <div class="category-list-element" id="5">
        <p class="category-list-element-title">Podkategoria 5</p>
        <img src="@/assets/right.png" alt="right arrow image" />
      </div>
      <div class="category-list-element" id="6">
        <p class="category-list-element-title">Podkategoria 6</p>
        <img src="@/assets/right.png" alt="right arrow image" />
      </div>
      <div class="category-list-element" id="7">
        <p class="category-list-element-title">Podkategoria 7</p>
        <img src="@/assets/right.png" alt="right arrow image" />
      </div>
      <div class="category-list-element" id="8">
        <p class="category-list-element-title">Podkategoria 8</p>
        <img src="@/assets/right.png" alt="right arrow image" />
      </div>
      <div class="category-list-element" id="9">
        <p class="category-list-element-title">Podkategoria 9</p>
        <img src="@/assets/right.png" alt="right arrow image" />
      </div>
      <div class="category-list-element" id="10">
        <p class="category-list-element-title">Podkategoria 10</p>
        <img src="@/assets/right.png" alt="right arrow image" />
      </div>
      <div class="category-list-element" id="11">
        <p class="category-list-element-title">Wszystkie</p>
        <p>+3</p>
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
        <p>+6</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
.undertabs-content-container {
  display: flex;
  position: absolute;
  background-color: white;
  z-index: 200;
  width: 662px;
  height: 448px;
  padding: 8px 0px 24px;

  overflow: hidden;
  border: 1px solid black;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-left: 10px;
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
  font-size: 13px;
  height: 32px;
  width: 290px;
  padding: 0px 22px 0px 24px;
}

.category-list-element img {
  height: 20px;
}
</style>
