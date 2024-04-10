<template>
  <div class="undertabs">
    <div class="undertab">
      <img
        src="@/assets/desktop-computer.png"
        alt="Image of a laptop and computer"
      />
      <p>Laptopy i komputery</p>
    </div>
    <div class="undertab">
      <img
        src="@/assets/mobile-phone.png"
        alt="Image of a smartphone and smartwatch"
      />
      <p>Smartfony i smartwatche</p>
    </div>
    <div class="undertab">
      <img src="@/assets/console.png" alt="Image of a gaming console" />
      <p>Gaming i streaming</p>
    </div>
    <div class="undertab">
      <img
        src="@/assets/microcontroller.png"
        alt="Image of a microcontroller"
      />
      <p>Podzespoły komputerowe</p>
    </div>
    <div class="undertab">
      <img src="@/assets/printer.png" alt="Image of a printer" />
      <p>Urządzenia peryferyjne</p>
    </div>
    <div class="undertab">
      <img src="@/assets/tv.png" alt="Image of a TV" />
      <p>Tv i audio</p>
    </div>
    <div class="undertab">
      <img src="@/assets/smarthouse.png" alt="Image of a smart home" />
      <p>Smarthome i lifestyle</p>
    </div>
    <div class="undertab">
      <img src="@/assets/usb-cable.png" alt="Image of a USB cable" />
      <p>Akcesoria</p>
    </div>
    <div class="undertab">
      <img src="@/assets/deal.png" alt="Image of deals and new arrivals" />
      <p>Trędy, promocje i nowości</p>
    </div>
  </div>
</template>

<script scoped></script>

<style scoped>
.undertabs {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 9.9vw;
  padding-right: 9.9vw;
  background-color: rgb(242, 242, 242);
}

.undertab {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 9vw;
}

.undertab img {
  height: 3vh;
}

.undertab p {
  font-size: 13px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
