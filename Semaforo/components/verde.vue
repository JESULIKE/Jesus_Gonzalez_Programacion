<template>
  <div class="verde" :class="{ 'onverde': isOn }"></div>
</template>

<script>
export default {
  props: ['isOn']
}
</script>

<style>
.verde {
  position: absolute;
  top: 73.3%;
  left: 77.7%;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: rgb(0, 255, 0);
}

.onverde {
  background-color: rgba(0, 255, 0, 0.2);
}
</style>