<template>
  <nav>
    <img src="@/assets/logo.png" alt="" />
    <div class="search-input-container">
      <input class="serch-input" type="text" placeholder="Czego szukasz?" />
      <button class="serch-input-button">
        <img src="@/assets/search.png" alt="" />
      </button>
    </div>
    <div class="tab" id="tab-1">
      <img src="@/assets/headphone.png" alt="headphones icon" />
      <p>Pomoc i kontakt</p>
    </div>
    <div class="tab" id="tab-2">
      <img src="@/assets/person.png" alt="head icon" />
      <p>Twoje konto</p>
    </div>
    <div class="tab" id="tab-3">
      <img src="@/assets/heart.png" alt="heart icon" />
      <p>Twoje listy</p>
    </div>
    <div class="tab" id="tab-4">
      <img src="@/assets/shopping-cart.png" alt="cart icon" />
      <p>Koszyk</p>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped>
nav {
  padding: 1vh;
  padding-left: 10vw;
  padding-right: 10vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5vh;
}
img {
  height: 5vh;
}

.search-input-container {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid rgb(204, 204, 204);
  height: 30px;
  padding-left: 10px;
  height: 5vh;
  width: 25vw;
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
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.serch-input-button:hover {
  background: rgb(40, 40, 40);
}

.serch-input-button img {
  height: 100%;
}

.tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 5vh;
  padding: 0px;
  margin: 0px;
}

.tab img {
  height: 3.4vh;
}
.tab p {
  height: 1vh;
  margin: 2px;
  font-size: 11px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
