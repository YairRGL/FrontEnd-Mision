<template>
  <div class="content">
    <Navbar />
    <Pedidos />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/NavBar.vue";
import Pedidos from "@/components/Pedidos.vue";

export default {
  name: "PedidosView",
  components: {
    Navbar,
    Pedidos,
  },
};
</script>
