<template>
  <div class="navbar">
    <img src="../assets/images/logo.png" width="185" height="185" />
    <div class="navbar-center">
      <router-link to="/">Principal</router-link>
      <router-link to="/acerca">Acerca de nosotros</router-link>
      <router-link to="/pedidos">Pedidos</router-link>
      <router-link to="/inventario">Inventario</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "navBar",
};
</script>
