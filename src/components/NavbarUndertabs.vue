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
  justify-content: space-evenly;
  padding-left: 150px;
  padding-right: 150px;
  background-color: rgb(242, 242, 242);
  box-shadow: 0px 0px 5px 1px rgba(197, 197, 197, 1);
}

.undertab {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 100%;
}

.undertab img {
  height: 22px;
  margin-right: 5px;
}

.undertab p {
  font-size: 13px;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.3;
  margin: 0;
}
</style>
