// store/index.js
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      // Define tu estado inicial aquí

      comprasrealizadas: [],

      productos: [
        {
          imagen:
            "https://m.media-amazon.com/images/I/71CuDvQ-ELL._AC_SX466_.jpg",
          precio: "120.00$",
          titulo: "RYZEN 5 5600G",
          descripcion: "PROCESADOR CON GRAFICOS INTEGRADOS",
          id: 1,
        },
        {
          imagen:
            "https://m.media-amazon.com/images/I/71QVd4FLxJL._AC_SX466_.jpg",
          precio: "38.00$",
          titulo: "KINGSTON M.2",
          descripcion: "SSD INTERNO 500GB",
          id: 2,
        },
        {
          imagen:
            "https://m.media-amazon.com/images/I/71yyY+Y29WL._AC_SX466_.jpg",
          precio: "34.00$",
          titulo: "MEMORIA RAM DDR4",
          descripcion: "RAM TEAMGROUP 16 GB (2 x 8 GB)",
          id: 3,
        },
        {
          imagen:
            "https://m.media-amazon.com/images/I/91xuKwlRfNL._AC_SX679_.jpg",
          precio: "135.00$",
          titulo: "PRIME B550M-K",
          descripcion: "MOTHERBOARD ASUS",
          id: 4,
        },
        {
          imagen:
            "https://m.media-amazon.com/images/I/71U+iUTDBhL._AC_SX466_.jpg",
          precio: "120.00$",
          titulo: "EVGA SuperNOVA 650 Ga",
          descripcion: "FUENTE DE PODER MODULAR",
          id: 5,
        },
        {
          imagen:
            "https://m.media-amazon.com/images/I/819QN3lGjRL._AC_SX466_.jpg",
          precio: "90.00$",
          titulo: "LG 24MP400-B",
          descripcion: "PANTALLA IPS FULL HD",
          id: 6,
        },
        {
          imagen:
            "https://m.media-amazon.com/images/I/71bU4sGtytL._AC_SX466_.jpg",
          precio: "60.00$",
          titulo: "GAMDIAS ATX",
          descripcion: "CHASIS PARA COMPUTADORA",
          id: 7,
        },
        {
          imagen:
            "https://m.media-amazon.com/images/I/41v52hNbOAL._AC_SY679_.jpg",
          precio: "35.00$",
          titulo: "Logitech G 305 LIGHTSPEED",
          descripcion: "MOUSE GAMING INALAMBRICO",
          id: 8,
        },
      ],
    };
  },
  mutations: {
    agregarcompra(state, producto) {
      if (state.comprasrealizadas.length > 0) {
        let r = state.comprasrealizadas.findIndex((e) => {
          return e.id == producto.id;
        });
        console.log(state.comprasrealizadas);
        if (r == -1) state.comprasrealizadas.push(producto);
        else {
          state.comprasrealizadas[r].cantidad += 1;
        }
      } else state.comprasrealizadas.push(producto);
    },
    eliminaritem(state, posicion) {
      state.comprasrealizadas.splice(posicion, 1);
    },
  },
  actions: {
    agregarcompra({ commit }) {
      commit("agregarcompra");
    },

    eliminaritem({ commit }) {
      commit("eliminaritem");
    },
  },

  getters: {
    count: (state) => state.count,
    productos: (state) => state.productos,
    compras: (state) => {
      const cantidad = state.comprasrealizadas.reduce((accumulator, objeto) => {
        return accumulator + objeto.cantidad;
      }, 0);
      return cantidad;
    },
    procomprados: (state) => state.comprasrealizadas,
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
  return {
    provide: {
      store: store,
    },
  };
});
