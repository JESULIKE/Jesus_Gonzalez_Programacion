<template>
  <div class="traffic-light">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />

    <rojo :isOn="isRedLightOn" />
    <amarillo :isOn="isYellowLightOn" />
    <verde :isOn="isGreenLightOn" />

    <div class="button-container d-flex justify-content-center align-items-center flex-column">
      <button type="button" class="btn btn-danger mb-3" @click="Cambiar">Alto</button>
      <button type="button" class="btn btn-warning mb-3" @click="Cambiar2">Precaución</button>
      <button type="button" class="btn btn-success mb-3" @click="Cambiar3">Puede Continuar</button>
    </div>
  </div>
</template>

<script>
import rojo from './components/rojo.vue';
import amarillo from './components/amarillo.vue';
import verde from './components/verde.vue';

export default {
  components: {
    rojo,
    amarillo,
    verde,
  },
  data() {
    return {
      isRedLightOn: true,
      isYellowLightOn: true,
      isGreenLightOn: true,
    };
  },
  methods: {
    Cambiar() {
      this.isRedLightOn = false;
      this.isYellowLightOn = true;
      this.isGreenLightOn = true;
    },
    Cambiar2() {
      this.isYellowLightOn = false;
      this.isRedLightOn = true;
      this.isGreenLightOn = true;
    },
    Cambiar3() {
      this.isGreenLightOn = false;
      this.isYellowLightOn = true;
      this.isRedLightOn = true;
    },
  },
};
</script>

<style scoped>
.traffic-light {
  background-image: url('/public/fondo.jpg');
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>