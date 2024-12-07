<template>
  <v-card class="mx-auto" max-width="344">
    <v-img
        height="250px"
        width="250px"
        class="mx-auto justify-center"
        :src="info.imagen"
        contain
    ></v-img>

    <v-card-title>
      {{ info.titulo }} {{ this.$store.state.count }}
    </v-card-title>

    <v-card-subtitle>
      {{ info.descripcion }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
          @click="compra()"
          color="orange-lighten-2"
          @mouseover="hover = true"
          @mouseleave="hover = false"
      >
        {{ hover ? "Añadir al Carrito" : info.precio }}
      </v-btn>

      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      hover: false, // Variable para controlar el estado del hover
    };
  },
  methods: {
    compra() {
      let copia = {...this.info};
      copia.cantidad = 1;

      if (this.$store.getters.procomprados.length > 0) {
        let r = this.$store.getters.getProductoById(copia.id);
        if (r === -1) this.$store.dispatch("agregarcompra", copia);
        else this.$store.dispatch("incrementarCantidad", r);
      } else {
        this.$store.dispatch("agregarcompra", copia);
      }
    },
  },
};
</script>

<style scoped>

</style>
