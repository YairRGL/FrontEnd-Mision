<template>
  <div class="content">
    <Navbar />
    <Inventario />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/NavBar.vue";
import Inventario from "@/components/Inventario.vue";

export default {
  name: "InventarioView",
  components: {
    Navbar,
    Inventario,
  },
};
</script>
