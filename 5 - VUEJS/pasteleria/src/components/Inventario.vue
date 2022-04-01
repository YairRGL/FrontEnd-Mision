<template>
  <div class="container">
    <h2>Sabores restantes</h2>
    <div class="inventario">
      <table cellspacing="0">
        <thead>
          <th>Sabor</th>
          <th>Cantidad restante</th>
        </thead>
        <tbody>
          <tr v-for="(pastel, i) in $store.state.pasteles" :key="i">
            <td>{{ pastel.sabor }}</td>
            <td>{{ pastel.stock }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <h2>Adornos restantes</h2>
    <div class="inventario">
      <table cellspacing="0">
        <thead>
          <th>Adorno</th>
          <th>Cantidad restante</th>
        </thead>
        <tbody>
          <tr v-for="(adorno, i) in $store.state.adornos" :key="i">
            <td>{{ adorno.descp }}</td>
            <td>{{ adorno.stock }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "inventarioC",
};
</script>
