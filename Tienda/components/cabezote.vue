<template>
  <div>
    <v-app-bar
      image="https://html-color.org/es/212529.jpg"
      dark height="150">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>
        <h2>PC COMPONENTES - JESUS GONZALEZ Y PEDRO ROMERO</h2>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <carrito class="mr-5" :productos="productos">

      </carrito>
    </v-app-bar>

  </div>
</template>
<script>
export default {
  props: {
    productos: Array,
  }
}
</script>

<style scoped>
 h2{
  color: white;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
 }
</style>