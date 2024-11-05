<template>
  <div class="rojo" :class="{ 'onrojo': isOn }"></div>
</template>

<script>
export default {
  props: ['isOn']
}
</script>

<style>
.rojo {
  position: absolute;
  top: 38.8%;
  left: 77.7%;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: red;
}

.onrojo {
  background-color: rgba(255, 0, 0, 0.2);
}
</style>