<template>
  <div class="content">
    <Navbar />
    <Acerca />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/NavBar.vue";
import Acerca from "@/components/Acerca.vue";

export default {
  name: "AboutView",
  components: {
    Navbar,
    Acerca,
  },
};
</script>
