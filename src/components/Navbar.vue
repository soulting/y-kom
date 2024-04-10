<template>
  <nav>
    <img src="@/assets/logo.png" alt="" />
    <div class="search-input-container">
      <input class="serch-input" type="text" placeholder="Czego szukasz?" />
      <button class="serch-input-button">
        <img src="@/assets/search.png" alt="search icon" />
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
  padding-left: 9.9vw;
  padding-right: 9.9vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.2vh;
  gap: 10px;
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
  height: 4.7vh;
  width: 32vw;
  /* margin: 0 30px; */
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
  height: 5vh;
  padding: 0px;
  margin: 0px;
}

.tab img {
  height: 3.1vh;
}
.tab p {
  height: 1vh;
  margin: 2px;
  font-size: 11px;
  font-family: Arial, Helvetica, sans-serif;
  white-space: nowrap;
}
</style>
