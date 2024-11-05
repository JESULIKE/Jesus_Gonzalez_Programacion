<template>
  <div class="amarillo" :class="{ 'onamarillo': isOn }"></div>
</template>

<script>
export default {
  props: ['isOn']
}
</script>
  
<style>
.amarillo {
  position: absolute;
  top: 56%;
  left: 77.7%;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: yellow;

}

.onamarillo {
  background-color: rgba(255, 255, 0, 0.2);
}
</style>