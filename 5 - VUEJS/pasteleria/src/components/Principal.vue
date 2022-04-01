<template>
  <div>
    <div class="container">
      <h2>¡Bienvenido a Galactic Cakes!</h2>
      <form>
        <h3>Sabores disponibles:</h3>
        <div class="hidden">
          <ul>
            <li>
              <input type="checkbox" id="p1" name="pastel" value="chocolate" />
              <label for="p1"><img src="../assets/images/p1.png" /></label>
              <label for="p1">${{ $store.state.pasteles[0].precio }} MXN</label>
            </li>
            <li>
              <input type="checkbox" id="p2" name="pastel" value="vainilla" />
              <label for="p2"><img src="../assets/images/p2.png" /></label>
              <label for="p1">${{ $store.state.pasteles[1].precio }} MXN</label>
            </li>
            <li>
              <input type="checkbox" id="p3" name="pastel" value="fresa" />
              <label for="p3"><img src="../assets/images/p3.png" /></label>
              <label for="p1">${{ $store.state.pasteles[2].precio }} MXN</label>
            </li>
            <li>
              <input type="checkbox" id="p4" name="pastel" value="limon" />
              <label for="p4"><img src="../assets/images/p4.png" /></label>
              <label for="p1">${{ $store.state.pasteles[3].precio }} MXN</label>
            </li>
          </ul>
          <h3>Adornos disponibles:</h3>
          <ul>
            <li>
              <input type="checkbox" id="a1" name="adorno" value="a1" />
              <label for="a1"><img src="../assets/images/a1.png" /></label>
              <label for="a1">$200 MXN</label>
            </li>
            <li>
              <input type="checkbox" id="a2" name="adorno" value="a2" />
              <label for="a2"><img src="../assets/images/a2.png" /></label>
              <label for="a1">$160 MXN</label>
            </li>
            <li>
              <input type="checkbox" id="a3" name="adorno" value="a3" />
              <label for="a3"><img src="../assets/images/a3.png" /></label>
              <label for="a1">$220 MXN</label>
            </li>
            <li>
              <input type="checkbox" id="a4" name="adorno" value="a4" />
              <label for="a4"><img src="../assets/images/a4.png" /></label>
              <label for="a1">$350 MXN</label>
            </li>
          </ul>
        </div>
        <h3>Ingresa tus datos:</h3>
        <div class="formy">
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" />
          <label for="telefono">Telefono:</label>
          <input type="number" id="telefono" name="telefono" />
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label for="pedido">Descripcion general del pedido:</label>
          <input type="text" id="pedido" name="pedido" />
        </div>
      </form>
      <input class="button" type="submit" value="Confirmar" />
    </div>
  </div>
</template>
<script>
export default {
  name: "principalC",
};
</script>
