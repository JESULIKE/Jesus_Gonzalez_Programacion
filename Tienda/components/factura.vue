<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      mostrar: this.show,
      mostrarGracias: false,
      titulos: [
        { title: 'Titulo', align: 'start', sortable: false, key: 'titulo' },
        { title: 'Descripción', align: 'start', key: 'descripcion' },
        { title: 'Cantidad', align: 'center', key: 'cantidad' },
        { title: 'Imagen', align: 'center', key: 'imagen' },
        { title: 'Total', align: 'end', key: 'total' },
        { title: 'Eliminar', align: 'center', key: 'eliminar' },
        { title: 'ID', align: 'start', key: 'id' }
      ],
    };
  },
  methods: {
    cerrar() {
      this.$emit('cerrar');
    },
    confirmarCompra() {
      // Resetea el carrito y muestra el popup de agradecimiento
      this.$store.state.comprasrealizadas = [];
      this.mostrarGracias = true;
    },
    aceptarGracias() {
      this.mostrarGracias = false;
      this.cerrar();
    },
    incrementarCantidad(item) {
      item.cantidad++;
      this.$store.dispatch('incrementarCantidad', item);
    },
    decrementarCantidad(item) {
      if (item.cantidad > 1) {
        item.cantidad--;
        this.$store.dispatch('incrementarCantidad', item); // Puedes implementar una acción específica para decrementar
      }
    },
    calcularTotalPorPrenda(item) {
      return item.cantidad * item.precio;
    },
    eliminarProducto(item) {
      const index = this.$store.getters.getProductoById(item.id);
      if (index !== -1) {
        this.$store.dispatch('eliminaritem', index);
      }
      // Verifica si el carrito está vacío después de eliminar
      if (this.$store.getters.procomprados.length === 0) {
        this.cerrar();
      }
    }
  },
  computed: {
    calcularTotalGeneral() {
      return this.$store.getters.procomprados.reduce((total, item) => {
        return total + (item.cantidad * item.precio);
      }, 0);
    },
    hayProductosSeleccionados() {
      return this.$store.getters.procomprados.length > 0;
    }
  },
  watch: {
    show(val) {
      this.mostrar = val;
    },
    mostrar(val) {
      this.$emit('update:show', val);
    }
  }
};
</script>

<template>
  <v-dialog
      v-model="mostrar"
      width="auto"
      persistent
  >
    <v-card
        class="py-4 px-1"
        max-width="800"
        prepend-icon="mdi-cart"
        title="Carrito de Compras"
    >
      <v-card-text>
        <v-data-table
            :headers="titulos"
            :items="this.$store.getters.procomprados"
            density="compact"
            class="elevation-1"
        >
          <template v-slot:item.cantidad="{ item }">
            <div class="container-counter">
              <button @click="decrementarCantidad(item)" :disabled="item.cantidad <= 1">
                <v-icon small>mdi-minus</v-icon>
              </button>
              <span class="counter-value">{{ item.cantidad }}</span>
              <button @click="incrementarCantidad(item)">
                <v-icon small>mdi-plus</v-icon>
              </button>
            </div>
          </template>

          <template v-slot:item.imagen="{ value }">
            <div class="container-img">
              <img :src="value" alt="Imagen del producto">
            </div>
          </template>

          <template v-slot:item.total="{ item }">
            <span class="font-weight-bold">${{ calcularTotalPorPrenda(item).toFixed(2) }}</span>
          </template>

          <template v-slot:item.eliminar="{ item }">
            <v-btn icon @click="eliminarProducto(item)">
              <v-icon color="red">mdi-delete</v-icon>
            </v-btn>
          </template>
        </v-data-table>

        <v-divider class="my-4"></v-divider>
        <v-row class="justify-end">
          <v-col cols="auto">
            <div class="text-h6 font-weight-bold">
              Total de todas las prendas: <span class="text-primary">${{ calcularTotalGeneral.toFixed(2) }}</span>
            </div>
          </v-col>
        </v-row>
      </v-card-text>

      <template v-slot:actions>
        <v-btn
            class="ms-auto"
            color="primary"
            text="Cerrar"
            @click="cerrar()"
        ></v-btn>
        <v-btn
            class="ms-auto"
            color="success"
            text="Confirmar compra"
            :disabled="!hayProductosSeleccionados"
            @click="confirmarCompra"
        ></v-btn>
      </template>
    </v-card>
  </v-dialog>

  <!-- Popup de agradecimiento -->
  <v-dialog v-model="mostrarGracias" max-width="400">
    <v-card class="container-card">
      <v-card-title class="text-h5 text-center font-weight-bold">¡Gracias por su compra!</v-card-title>
      <v-card-text class="text-center">Su compra se ha realizado con éxito.</v-card-text>
      <v-btn text color="green" @click="aceptarGracias">Aceptar</v-btn>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.container-card{
  padding: 20px;
}
.container-counter {
  display: flex;
  align-items: center;
  gap: 5px;
}

.container-img img {
  width: 50px;
  height: auto;
  border-radius: 5px;
}

.counter-value {
  margin: 0 10px;
  font-weight: bold;
}
</style>
