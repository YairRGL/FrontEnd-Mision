import { createStore } from "vuex";

export default createStore({
  state: {
    pasteles: [
      { sabor: "chocolate", stock: 10, precio: 300 },
      { sabor: "vainilla", stock: 3, precio: 350 },
      { sabor: "fresa", stock: 15, precio: 250 },
      { sabor: "limon", stock: 23, precio: 380 },
    ],
    adornos: [
      { descp: "Adorno 1", stock: 40 },
      { descp: "Adorno 2", stock: 1 },
      { descp: "Adorno 3", stock: 14 },
      { descp: "Adorno 4", stock: 80 },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
